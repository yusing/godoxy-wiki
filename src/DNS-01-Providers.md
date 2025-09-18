# DNS-01 Providers

## Cloudflare

```yaml
autocert:
  provider: cloudflare
  options:
    auth_token:
```

`auth_token` your zone API token

Follow [this guide from LEGO](https://go-acme.github.io/lego/dns/cloudflare/#api-tokens) to create a new token with required permissions

## CloudDNS

```yaml
autocert:
  provider: clouddns
  options:
    client_id:
    email:
    password:
```

## DuckDNS

```yaml
autocert:
  provider: duckdns
  options:
    token:
```

Tested by [earvingad](https://github.com/earvingad)

## OVHCloud

```yaml
autocert:
  provider: ovh
  options:
    api_endpoint:
    application_key:
    application_secret:
    consumer_key:
    oauth2_config:
      client_id:
      client_secret:
```

_Note, `application_key` and `oauth2_config` **CANNOT** be used together_

- `api_endpoint`: Endpoint URL, or one of
  - `ovh-eu`,
  - `ovh-ca`,
  - `ovh-us`,
  - `kimsufi-eu`,
  - `kimsufi-ca`,
  - `soyoustart-eu`,
  - `soyoustart-ca`
- `application_secret`
- `application_key`
- `consumer_key`
- `oauth2_config`: Client ID and Client Secret
  - `client_id`
  - `client_secret`

## Porkbun

```yaml
autocert:
  provider: porkbun
  options:
    api_key:
    secret_api_key:
```

## AWS Route 53

```yaml
autocert:
  provider: route53
  options:
    accesskeyid: your_key_id # AWS User Access key id on a user with Route53 permissions
    secretaccesskey: your_secret_access_key # AWS User Access key secret on a user with Route53 permissions
    region: us-east-1 # us-east-1 for most of the world
    hostedzoneid: your_hosted_zone_id # The Hosted Zone ID of your domain in AWS Route53
```

## Custom ACME CA

See [Certificates and domain matching](Certificates-and-domain-matching.md#auto-ssl-with-custom-internal-ca) for more details.

## Others

> [!NOTE]
> A full list of provider names can be found in [autocert/providers.go](https://github.com/yusing/godoxy/blob/4410637f8b543e0042ee92efe63319fad35778a3/internal/autocert/providers.go#L153)
>
> Full documentation of [LEGO](https://go-acme.github.io/lego/index.html) supported providers can be found in [LEGO DNS documentation](https://go-acme.github.io/lego/dns).

> [!WARNING]
> Anything not listed above are untested, please submit an issue if any of them doesn't work.

**CloudDNS** as an example (from <https://go-acme.github.io/lego/dns/clouddns/>)

### Option 1

Set these in `.env`

```bash
CLOUDDNS_CLIENT_ID=bLsdFAks23429841238feb177a572aX
CLOUDDNS_EMAIL=you@example.com
CLOUDDNS_PASSWORD=b9841238feb177a84330f
```

### Option 2

Set these in `config.yml` `autocert.options` section

Turn them into:

```yaml
autocert:
  ...
  provider: clouddns
  options:
    client_id: bLsdFAks23429841238feb177a572aX
    email: you@example.com
    password: b9841238feb177a84330f
```
