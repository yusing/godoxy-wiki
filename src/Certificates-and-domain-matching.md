# Certificates and domain matching

## TL;DR

- **Main certificate** covers all domains in `autocert.domains`; **extra certificates** can be configured for additional domains.
- Certificates are selected via **SNI (Server Name Indication)** with precedence: exact match > wildcard match, main cert > extra cert.
- Certificates are managed by [`lego`](https://github.com/go-acme/lego) (ACME) with DNS-01; auto-issued and auto-renewed.
- You can bring your own certificate by setting `provider: local`.
- Short alias vs FQDN determines how domains match; `match_domains` restricts which base domains are valid.

## Certificates

- GoDoxy uses a **main certificate** that covers every domain listed in `autocert.domains` in `config.yml`. You can also configure **extra certificates** for additional domains via the `extra` field.

- Certificate selection is based on **SNI (Server Name Indication)** from the client's TLS handshake:
  - **Exact match** takes precedence over wildcard match (e.g., `app.example.com` exact beats `*.example.com` wildcard)
  - **Main certificate** takes precedence over extra certificates when both match the same domain
  - If no SNI match is found, the main certificate is used as fallback

- Certificates are issued/managed by `lego` using [ACME](<https://en.wikipedia.org/wiki/ACME_(protocol)>) and typically [Let's Encrypt](https://letsencrypt.org) via the [DNS-01](https://en.wikipedia.org/wiki/DNS-01) challenge.

- Auto-issue/renew behavior (with a 1-hour cooldown after failures). Renewal happens when:
  - `autocert` is enabled but no certs are present in `certs/`.
  - The set of `autocert.domains` no longer matches the loaded certificate.
  - The certificate will expire within 30 days.

- Extra certificates participate in ACME obtain/renew cycles independently and inherit configuration from the main config (except `email` and `extra` fields).

- You can also use an existing (including self-signed) certificate.

### Autocert Configuration

| Field        | Type   | Default          | Required              | Description                                  |
| ------------ | ------ | ---------------- | --------------------- | -------------------------------------------- |
| `provider`   | string | local            | Yes                   | Certificate / DNS-01 provider                |
| `email`      | string | -                | Yes                   | ACME Email                                   |
| `domains`    | array  | -                | Yes                   | Certificate domains                          |
| `options`    | object | -                | `provider` != `local` | Provider-specific options                    |
| `resolvers`  | array  | -                | No                    | DNS resolvers to use                         |
| `cert_path`  | string | `certs/cert.crt` | No                    | Path to the certificate file to load / store |
| `key_path`   | string | `certs/priv.key` | No                    | Path to the private key file to load / store |
| `extra`      | array  | -                | No                    | Additional certificates (see below)          |
| `ca_dir_url` | string | -                | No                    | URL to the CA directory                      |
| `ca_certs`   | array  | -                | No                    | CA certificates to use                       |
| `eab_kid`    | string | -                | No                    | EAB¹ Key ID                                  |
| `eab_hmac`   | string | -                | No                    | Base64 encoded EAB¹ HMAC                     |

1. EAB refers to External Account Binding.

#### Extra Certificates

The `extra` field allows you to configure additional certificates for domains not covered by the main certificate. Each extra entry:

- **Must** specify unique `cert_path` and `key_path` (no duplicates across extra entries)
- **Inherits** all configuration from the main config (except `extra` fields)
- **Participates** in ACME obtain/renew cycles independently
- **Can override** any field from the main config (e.g., `domains`, `provider`, `options`)

Extra certificates are selected via SNI when the client's requested domain matches the certificate's domains (exact or wildcard). The main certificate takes precedence when both match.

### Using Existing SSL Certificate

```yaml
autocert:
  provider: local
  # path relative to /app
  cert_path: certs/cert.crt
  key_path: certs/priv.key
```

### Autocert with Cloudflare

```yaml
autocert:
  provider: cloudflare
  email: your-email@example.com
  domains:
    - '*.yourdomain.com'
  options:
    auth_token: your-zone-api-token
```

### Autocert with a Custom Internal CA

You may use internal CA like [step-ca](https://github.com/smallstep/certificates) for issuing certificates.

Use `step-ca` as an example:

```bash
export ACME_URL=https://acme.internal
# get root certs and save to `certs/roots.pem`
# assume that `certs/` is mounted to `/app/certs` (by default)
curl -k https://${ACME_URL}/roots.pem > certs/roots.pem
```

```yaml
autocert:
  provider: custom
  email: your-email@example.com
  domains:
    - '*.yourdomain.com'
  ca_dir_url: https://acme.internal/acme/acme/directory
  ca_certs:
    - certs/roots.pem
```

#### EAB

If you are using EAB (External Account Binding), set `eab_kid` and `eab_hmac` in `autocert`. This also works with custom ACME CAs.

```yaml
autocert:
  provider: custom
  email: your-email@example.com
  domains:
    - '*.yourdomain.com'
  eab_kid: your-eab-kid
  eab_hmac: base64-encoded-hmac
```

### Multiple Certificates with SNI

You can configure multiple certificates to serve different domains. GoDoxy uses SNI to select the appropriate certificate during the TLS handshake.

**Example: Multiple certificates with different providers**

```yaml
autocert:
  provider: cloudflare
  email: your-email@example.com
  domains:
    - '*.example.com'
  options:
    auth_token: your-zone-api-token
  extra:
    # Extra cert 1: Same provider, different domain
    - cert_path: certs/other.crt
      key_path: certs/other.key
      domains:
        - '*.other.com'
      # Inherits provider, email, options from main config

    # Extra cert 2: Different provider (custom CA)
    - cert_path: certs/internal.crt
      key_path: certs/internal.key
      provider: custom
      domains:
        - '*.internal.local'
      ca_dir_url: https://ca.internal/acme/directory

    # Extra cert 3: Local/static certificate
    - cert_path: certs/static.crt
      key_path: certs/static.key
      provider: local
      domains:
        - '*.services.internal'
      # Static certificate, no ACME obtain/renew
```

**SNI Selection Behavior:**

Based on the example above, certificate selection works as follows:

- Request for `app.example.com` → Uses main cert (exact match on `*.example.com`)
- Request for `sub.example.com` → Uses main cert (wildcard match on `*.example.com`)
- Request for `api.other.com` → Uses extra cert 1 (wildcard match on `*.other.com`)
- Request for `service.internal.local` → Uses extra cert 2 (wildcard match on `*.internal.local`)
- Request for `db.services.internal` → Uses extra cert 3 (wildcard match on `*.services.internal`)
- Request for `unknown.com` → Falls back to main cert (no match found)

**Selection Precedence:**

1. **Exact match** takes precedence over wildcard match (e.g., if main cert has exact `app.example.com` and extra cert has wildcard `*.example.com`, exact wins)
2. **Main certificate** takes precedence over extra certificates when both match the same domain
3. If no SNI match is found, the main certificate is used as fallback

### Other DNS providers

Check [DNS-01 Providers](DNS-01-Providers.md)

### Troubleshooting

If you encounter issues:

- Set `LEGO_DISABLE_CNAME_SUPPORT=1` if your domain has a CNAME record.
- Try different DNS resolvers via `autocert.resolvers`.

## Domain matching

An alias is either a short alias or an FQDN (Fully Qualified Domain Name) alias.

### Docker

By default, the container name is used as the short alias unless `proxy.aliases` is set.

### General

#### Without `match_domains`

If `match_domains` is not set in `config.yml`, below will match route with short alias `app`:

- `app.anydomain.com`
- `app.*.anydomain.com`
- ...

Below will match route with FQDN alias `app.example.com`:

- `app.example.com`
- `app.example.com.*`

#### Using `match_domains`

Use this to restrict which base domains are valid.

With `match_domains` in `config.yml`:

```yaml
match_domains:
  - example.com
  - example.org
```

Then a short alias `app` can be accessed only at:

- `app.example.com`
- `app.example.org`

And a route with FQDN alias `app.example.com` can be accessed at:

- `app.example.com`

#### Use case example for `match_domains`

Given your main domain is `my.app`:

- Add `my.app` to `autocert.domains` and `match_domains` in `config.yml`.

  ```yaml
  autocert:
    domains:
      - my.app
  match_domains:
    - my.app
  ```

- Use short aliases like `adguard` and `sonarr` when you want them accessible under your main domain.

  ```yaml
  services:
    adguard: # adguard.my.app
      ...
      labels:
        proxy.aliases: adguard
    sonarr: # sonarr.my.app
      ...
      labels:
        proxy.aliases: sonarr
  ```

- Use FQDN aliases like `adguard.other.app` and `sonarr.other.app` when you want them accessible under other domains.

  ```yaml
  # docker compose
  services:
    adguard:
      ...
      labels:
        proxy.aliases: adguard.other.app
    sonarr:
      ...
      labels:
        proxy.aliases: sonarr.other.app

  # config.yml
  autocert:
    domains:
      - my.app
  ```
