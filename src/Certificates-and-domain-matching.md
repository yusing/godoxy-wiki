# Certificates and domain matching

## Certificates

- GoDoxy **DOES NOT** register certificate for **each route**. Instead, it registers for all `autocert.domains` in your `config.yml` then combine into one certificate. All HTTP(s) requests to **GoDoxy** will be handled by the same certificate.

- GoDoxy uses https://github.com/go-acme/lego, similar to other reverse proxies powered by [Golang](https://golang.org). Powered by [ACME](<https://en.wikipedia.org/wiki/ACME_(protocol)>) and [Let's Encrypt](https://letsencrypt.org) via [DNS-01](https://en.wikipedia.org/wiki/DNS-01) challenge.

- GoDoxy obtain / renew certificates automatically, with 1 hour cooldown for every failed requests. It only renew when these conditions are met:
  - `autocert` is enabled but no certs are found under `certs/`
  - `autocert.domains` does not match current certs
  - Certificates are about to expire in a month

## Domain matching

An alias can either be short alias or FQDN (Fully Qualified Domain Name) alias.

### Docker

Uses container name as short alias by default, unless `proxy.aliases` is specified.

### General

#### Without `match_domains`

When no `match_domains` is set in `config.yml`, a route with short alias `app` can be accessed at:

- `app.anydomain.com`
- `app.*.anydomain.com`
- ...

A route with FQDN alias `app.example.com` can be accessed at:

- `app.example.com`
- `app.*.example.com`

#### Using `match_domains`

This feature is useful when you want to limit routes to certain domains.

With `match_domains` set under `config.yml` like this:

```yaml
match_domains:
  - example.com
  - example.org
```

A route with short alias `app` can only be accessed at:

- `app.example.com`
- `app.example.org`

A route with FQDN alias `app.example.com` can be accessed at:

- `app.example.com`
- `app.*.example.com`
- `app.*.example.org`

#### Use case example for `match_domains`

Given your main domain is `my.app`

- Add `my.app` to `autocert.domains` and `match_domains` in `config.yml`
  ```yaml
  autocert:
    domains:
      - my.app
  match_domains:
    - my.app
  ```
- Use short aliases like `adguard` and `sonarr` when you want them to be accessible at your main domain
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
- Use FQDN aliases like `adguard.other.app` and `sonarr.other.app` when you want them to be accessible at other domains

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
