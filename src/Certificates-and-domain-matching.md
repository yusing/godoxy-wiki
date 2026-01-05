# Certificates and domain matching

## TL;DR

- **Main certificate** covers all domains in `autocert.domains`
- **Extra certificates** can be configured for additional domains
- SNI selection: exact match > wildcard match, main cert > extra cert
- Managed by [`lego`](https://github.com/go-acme/lego) (ACME) with DNS-01; auto-issued and auto-renewed
- Bring your own certificate with `provider: local`
- Short alias vs FQDN determines how domains match
- `match_domains` restricts which base domains are valid

## Certificates

- Main certificate covers every domain in `autocert.domains`
- Extra certificates can be added via the `extra` field for additional domains

- Based on **SNI (Server Name Indication)** from the client's TLS handshake
  - Exact match > wildcard match (e.g., `app.example.com` exact beats `*.example.com` wildcard)
  - Main cert > extra certificates when both match
  - Falls back to main cert if no match

- Issued/managed by `lego` using ACME, typically Let's Encrypt via DNS-01

- Auto-issue/renew with 1-hour cooldown after failures. Renewal happens when:
  - `autocert` is enabled but no certs are present
  - The set of `autocert.domains` no longer matches the loaded certificate
  - The certificate will expire within 30 days

#### Extra Certificates

- Must specify unique `cert_path` and `key_path` (no duplicates)
- Inherit all configuration from the main config (except `extra`)
- Participate in ACME cycles independently

- Selected via SNI when the client's requested domain matches (exact or wildcard)
- Main certificate takes precedence when both match

### Autocert Configuration

| Field        | Type   | Default          | Required              | Description                   |
| ------------ | ------ | ---------------- | --------------------- | ----------------------------- |
| `provider`   | string | local            | Yes                   | Certificate / DNS-01 provider |
| `email`      | string | -                | Yes                   | ACME email                    |
| `domains`    | array  | -                | Yes                   | Certificate domains           |
| `options`    | object | -                | `provider` != `local` | Provider-specific options     |
| `resolvers`  | array  | -                | No                    | DNS resolvers                 |
| `cert_path`  | string | `certs/cert.crt` | No                    | Certificate file path         |
| `key_path`   | string | `certs/priv.key` | No                    | Private key file path         |
| `extra`      | array  | -                | No                    | Additional certificates       |
| `ca_dir_url` | string | -                | No                    | CA directory URL              |
| `ca_certs`   | array  | -                | No                    | CA certificates to use        |
| `eab_kid`    | string | -                | No                    | EAB Key ID                    |
| `eab_hmac`   | string | -                | No                    | Base64 encoded EAB¹ HMAC      |

1. EAB refers to External Account Binding.

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

If using EAB (External Account Binding), set `eab_kid` and `eab_hmac` in `autocert`. Also works with custom ACME CAs.

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

Configure multiple certificates for different domains. GoDoxy uses SNI to select the appropriate certificate during TLS handshake.

> [!NOTE]
>
> `domains` is ignored for `local` provider.

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

| Hostname                 | Selected Certificate | Match Type                             |
| ------------------------ | -------------------- | -------------------------------------- |
| `app.example.com`        | Main cert            | Exact match (`*.example.com`)          |
| `sub.example.com`        | Main cert            | Wildcard match (`*.example.com`)       |
| `api.other.com`          | Extra cert 1         | Wildcard match (`*.other.com`)         |
| `service.internal.local` | Extra cert 2         | Wildcard match (`*.internal.local`)    |
| `db.services.internal`   | Extra cert 3         | Wildcard match (`*.services.internal`) |
| `unknown.com`            | Main cert (fallback) | No match                               |

**Selection Precedence:**

1. Exact match > wildcard match
2. Main cert > extra certificates when both match
3. Falls back to main cert if no match

### Other DNS providers

Check [DNS-01 Providers](DNS-01-Providers.md)

### Troubleshooting

If you encounter issues:

- Set `LEGO_DISABLE_CNAME_SUPPORT=1` if your domain has a CNAME record
- Try different DNS resolvers via `autocert.resolvers`

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
