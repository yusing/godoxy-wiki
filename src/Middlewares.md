# Middlewares

## Usage

Middlewares can be used in several ways:

- Entrypoint (ordered)
- Middleware Compose (ordered) - reusable middlewares YAML files under `config/middlewares`
- Docker labels (unordered)
- Route files (unordered)

> [!NOTE]
> For unordered middlewares, you have to set `priority` manually when order matters

```yaml
services:
  app:
    ...
    labels:
      proxy.aliases: myapp
      proxy.myapp.middlewares.redirectHTTP.priority: 1
      proxy.myapp.middlewares.cidrWhiteList.priority: 2
      proxy.myapp.middlewares.cidrWhiteList.allow: 127.0.0.1, 10.0.0.0/16
```

> [!NOTE]
> Middleware name and properties are case-insensitive and accept snake_case, PascalCase or camelCase
>
> `redirectHTTP`, `redirect_http` and `RedirectHttp` are equivalent.

## Syntax

> [!NOTE]
>
> Entrypoint middlewares share the same syntax as middleware compose
>
> See below for docker labels and route files

### Middleware Compose

```yaml
# middleware compose / entrypoint middleware syntax
<name>:
  - use: {middleware}
    {option1}: {value1}
    {option2}: {value2}
    ...

# config/middlewares/whitelist.yml
myWhitelist:
  - use: CloudflareRealIP
  - use: CIDRWhitelist
    allow:
      - 127.0.0.1
      - 223.0.0.0/8

# config.yml
entrypoint:
  middlewares:
    - use: myWhitelist@file
```

### Reusing Middleware Compose Objects

```yaml
# docker compose
services:
  app:
    labels:
      proxy.#1.middlewares.myWhitelist@file:

# route file
myapp:
  middlewares:
    myWhitelist@file:

# entrypoint
entrypoint:
  middlewares:
    myWhitelist@file:
```

## Examples

```yaml
# config.yml
entrypoint:
  middlewares:
    - use: cidr_whitelist
      allow:
        - 127.0.0.1
        - 10.0.0.0/16

# docker labels (yaml style)
proxy.#1.middlewares.cidr_whitelist.allow: |
  - 127.0.0.1
  - 10.0.0.0/16

# single line comma separated
proxy.#1.middlewares.cidr_whitelist.allow: 127.0.0.1, 10.0.0.0/16

# route file
openai:
  host: https://api.openai.com/
  middlewares:
    cidr_whitelist:
      allow:
        - 127.0.0.1
        - 10.0.0.0/16
    modify_request:
      set_headers:
        Host: api.openai.com
  homepage:
    show: false
```

## Available middlewares

### OIDC

OIDC uses the settings from `.env` file, with configurable `allowed_groups` and `allowed_users` overrides.

> [!NOTE]
>
> **DO NOT** use this middleware on entrypoint
>
> ```yaml
> # config.yml
> entrypoint:
>   middlewares:
>     - use: oidc
> ```

```yaml
# docker labels
proxy.#1.middlewares.oidc:

# additional docker labels (optional)
proxy.#1.middlewares.oidc.allowed_groups: admin
proxy.#1.middlewares.oidc.allowed_users: user1, user2

# route file
myapp:
  middlewares:
    oidc:
```

### Redirect http

Redirect http requests to https

```yaml
# docker labels
proxy.#1.middlewares.redirect_http:

# route file
myapp:
  middlewares:
    redirect_http:
```

nginx equivalent:

```nginx
server {
  listen 80;
  server_name domain.tld;
  return 301 https://$host$request_uri;
}
```

### Custom error pages

See [Custom Error Pages](Custom-Error-Pages)

```yaml
# docker labels
proxy.#1.middlewares.custom_error_page:

# route file
myapp:
  middlewares:
    custom_error_page:
```

nginx equivalent:

```nginx
location / {
  try_files $uri $uri/ /error_pages/404.html =404;
}
```

### Real IP

> [!NOTE]
>
> This middleware is used for resolving the correct client IP from `real_ip.header` (e.g. `X-Real-IP`)
>
> This affects:
>
> - `$remote_addr` and `$remote_host`
> - IP in the access log
> - [CIDRWhitelist](#cidr-whitelist) Middleware

`recursive: true` - choose the first IP that does not match the `from` list
`recursive: false` - choose the last IP that does not match the `from` list

#### Example

`X-Forwarded-For: 1.2.3.4, 192.168.0.123, 10.0.0.123` with `from: 192.168.0.0/16`

- `recursive: true` - `1.2.3.4`
- `recursive: false` - `10.0.0.123`

```yaml
# docker labels
proxy.#1.middlewares.real_ip.header: X-Real-IP
proxy.#1.middlewares.real_ip.from: |
  - 127.0.0.1
  - 192.168.0.0/16
  - 10.0.0.0/8
proxy.#1.middlewares.real_ip.recursive: true
# route file
myapp:
  middlewares:
    real_ip:
      header: X-Real-IP
      from:
        - 127.0.0.1
        - 192.168.0.0/16
        - 10.0.0.0/8
      recursive: true
```

nginx equivalent:

```nginx
location / {
  set_real_ip_from 127.0.0.1;
  set_real_ip_from 192.168.0.0/16;
  set_real_ip_from 10.0.0.0/8;

  real_ip_header    X-Real-IP;
  real_ip_recursive on;
}
```

### Cloudflare Real IP

> [!NOTE]
>
> This middleware requires no additional configuration.
>
> It is a preset of [Real IP](#real-ip) for Cloudflare Proxy/Tunnels. It will skip all local IPs.

#### Preset Values

- header: `CF-Connecting-IP`
- from: CIDR List of Cloudflare IPs from (updated hourly)
  - <https://www.cloudflare.com/ips-v4>
  - <https://www.cloudflare.com/ips-v6>
  - all local IPs
- recursive: true

```yaml
# docker labels
proxy.#1.middlewares.cloudflare_real_ip:

# route file
myapp:
  middlewares:
    cloudflare_real_ip:
```

### CIDR Whitelist

[See Request Level Access Control](Access-Control#request-level)

### Rate Limiter

- `average` - average number of requests per period
- `burst` - maximum number of requests allowed in a period
- `periods` - time period in format `number[unit]`

```yaml
# docker labels
proxy.#1.middlewares.ratelimit: |
  average: 100
  burst: 100
  periods: 1s

# route file
myapp:
  middlewares:
    ratelimit:
      average: 100
      burst: 100
      periods: 1s
```

### Modify request or response

**In docker compose, you need double dollar signs `$$` like `$$req_method` since single `$` is treated as environment variables.**

#### Supported variables

- `$req_method` - request http method
- `$req_scheme` - request URL scheme (http/https)
- `$req_host` - request host without port
- `$req_port` - request port
- `$req_addr` - request host with port (if present)
- `$req_path` - request URL path
- `$req_query` - raw query string
- `$req_url` - full request URL
- `$req_uri` - request URI (encoded path?query)
- `$req_content_type` - request Content-Type header
- `$req_content_length` - length of request body (if present)
- `$remote_addr` - client's remote address (may changed by middlewares like `RealIP` and `CloudflareRealIP`)
- `$remote_host` - client's remote ip parse from `$remote_addr`
- `$remote_port` - client's remote port parse from `$remote_addr` (may be empty)
- `$resp_content_type` - response Content-Type header
- `$resp_content_length` - length response body
- `$status_code` - response status code
- `$upstream_name` - upstream server name (alias)
- `$upstream_scheme` - upstream server scheme
- `$upstream_host` - upstream server host
- `$upstream_port` - upstream server port
- `$upstream_addr` - upstream server address with port (if present)
- `$upstream_url` - full upstream server URL
- `$header(name)` - get request header by name
- `$resp_header(name)` - get response header by name
- `$arg(name)` - get URL query parameter by name

#### Set headers

```yaml
# docker labels
proxy.myapp.middlewares.request.set_headers: |
  X-Custom-Header1: value1, value2
  X-Real-IP: $$remote_host

# route file
myapp:
  middlewares:
    request:
      set_headers:
        X-Custom-Header1: value1, value2
        X-Real-IP: $$remote_host
```

#### Add headers

```yaml
# docker labels
proxy.myapp.middlewares.request.add_headers: |
  X-Custom-Header1: value1, value2
  X-Custom-Header2: value3

# route file
myapp:
  middlewares:
    request:
      add_headers:
        X-Custom-Header1: value1, value2
        X-Custom-Header2: value3
```

#### Hide headers

```yaml
# docker labels
proxy.myapp.middlewares.request.hide_headers: |
  X-Custom-Header1
  X-Custom-Header2

# route file
myapp:
  middlewares:
    request:
      hide_headers:
        - X-Custom-Header1
        - X-Custom-Header2
```

##### nginx equivalents

```nginx
location / {
  add_header X-Custom-Header1 value1, value2;
  more_set_headers "X-Custom-Header1: value1, value2";
  more_set_headers "X-Custom-Header2: value3";
  more_clear_headers "X-Custom-Header1";
  more_clear_headers "X-Custom-Header2";
}
```

### X-Forwarded Headers

#### Hide X-Forwarded Headers

Remove `Forwarded` and `X-Forwarded-*` headers before request

```yaml
# docker labels
proxy.myapp.middlewares.hide_x_forwarded:

# route file
myapp:
  middlewares:
    hide_x_forwarded:
```

#### Set X-Forwarded Headers

Replace existing `X-Forwarded-*` headers with GoDoxy provided headers

```yaml
# docker labels
proxy.myapp.middlewares.set_x_forwarded:

# route file
myapp:
  middlewares:
    set_x_forwarded:
```
