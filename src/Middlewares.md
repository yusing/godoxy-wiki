# Middlewares

## Usage

Middlewares can be used in several ways:

- Entrypoint (ordered)
- Middleware Compose (ordered) - reusable middleware configuration YAML files under `config/middlewares`
- Docker labels (unordered)
- Route files (unordered)

For **unordered** middlewares, you have to set `priority` manually when order matters

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

Middleware name and properties are case-insensitive and accept snake_case, PascalCase or camelCase

`redirectHTTP`, `redirect_http` and `RedirectHttp` are equivalent.

## Syntax

### Middleware Compose and Entrypoint Middleware

```yaml
# middleware compose / entrypoint middleware syntax
<name>:
  - use: {middleware}
    {option1}: {value1}
    {option2}: {value2}
    ...

# middleware compose
# config/middlewares/whitelist.yml
myWhitelist:
  - use: CloudflareRealIP
  - use: CIDRWhitelist
    allow:
      - 127.0.0.1
      - 223.0.0.0/8

# config/config.yml
entrypoint:
  middlewares:
    - use: CloudflareRealIP
    - use: CIDRWhitelist
      allow:
        - 127.0.0.1
        - 223.0.0.0/8
```

### Docker Labels and Route Files

```yaml
# docker labels
proxy.#1.middlewares.{middlewareName}.{optionName}: { value }
proxy.#1.middlewares.{middlewareName}.{optionName2}: { value2 }

# docker labels (yaml style)
proxy.#1.middlewares.{middlewareName}: |
  {optionName}: {value}
  {optionName2}: {value2}

# route file
myapp:
  middlewares:
    { middlewareName }:
      { optionName }: { value }
      { optionName2 }: { value2 }
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

# entrypoint in config.yml
entrypoint:
  middlewares:
    - use: myWhitelist@file
```

### Middleware Bypass Rules

Bypass middlewares with a list of rules. Matching any of them will bypass the middleware.

See [Rules syntax](Rule-Based-Routing#syntax)

```yaml
entrypoint:
  middlewares:
    - use: oidc
      bypass:
        - route immich # bypass for immich route
        - route public_service & path / # bypass for route "public_service" and root path "/"
        - remote 127.0.0.1 # bypass for localhost
        - remote 192.168.0.0/16 # bypass for 192.168.0.0/16 ip range
        - remote 10.0.0.0/8 # bypass for 10.0.0.0/8 ip range
        - remote 172.16.0.0/12 # bypass for 172.16.0.0/12 ip range
        - method HEAD # bypass for HEAD method
        - header Authorization "Bearer 1234567890" # bypass for auth header with specific token
        - query access_code "1234567890" # bypass for access_code query with specific value
        - cookie session "1234567890" # bypass for session cookie with specific value
```

## Examples

### Syntax Examples

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

### Middleware with Bypass Rules

> [!WARNING]
>
> **Global OIDC is hard to be configured correctly.**

```yaml
# config.yml (global middlewares)
entrypoint:
  middlewares:
    - use: oidc
      bypass:
        - route pocket-id # bypass the IdP route
        - route immich & path /api/* # this allows immich route to bypass oidc (to use with its own oidc implementation)
        - route karakeep & path /api/v1/* # this allows karakeep mobile app (or any api requests) to bypass oidc
        # bypass local network
        - remote 127.0.0.1
        - remote 192.168.0.0/16
        - remote 10.0.0.0/8
        - remote 172.16.0.0/12
        - remote 100.64.0.0/10

# docker labels (route specific middlewares) (e.g. vaultwarden)
services:
  vw:
    ...
    labels:
      # this allows bitwarden apps (api requests) to bypass oidc
      proxy.#1.middlewares.oidc.bypass: path /identity/* | path /api/* | path /icons/*
  karakeep:
    ...
    labels:
      proxy.#1.middlewares.oidc.bypass: path /api/v1/*
```

## Available middlewares

### OIDC

Name: `oidc`

OIDC uses the settings from `.env` file, with configurable overrides.

| Option           | Description             | Default                      | Required |
| ---------------- | ----------------------- | ---------------------------- | -------- |
| `allowed_users`  | Override allowed users  | `GODOXY_OIDC_ALLOWED_USERS`  | No       |
| `allowed_groups` | Override allowed groups | `GODOXY_OIDC_ALLOWED_GROUPS` | No       |

### hCaptcha

Name: `hcaptcha`

Protects against bots by solving a [hCaptcha](https://hcaptcha.com/) challenge.

| Option           | Description         | Default | Required |
| ---------------- | ------------------- | ------- | -------- |
| `site_key`       | hCaptcha site key   |         | Yes      |
| `secret_key`     | hCaptcha secret key |         | Yes      |
| `session_expiry` | Session expiry time | `24h`   | No       |

#### Explanation

- User will see a captcha landing page before accessing the protected route.
- Once the captcha is solved, the user will be redirected to the real page.
- Users will need to solve the captcha again after each `session_expiry` period.

#### Screenshots

![captcha page light](images/captcha-page-light.png)
![captcha page dark](images/captcha-page-dark.png)

### Redirect http

Name: `redirect_http`

Redirect http requests to https

### Custom error pages

See [Custom Error Pages](Custom-Error-Pages)

### Real IP

Name: `real_ip`

> [!NOTE]
>
> This middleware is used for resolving the correct client IP from `real_ip.header` (e.g. `X-Real-IP`)
>
> This affects:
>
> - `$remote_addr` and `$remote_host`
> - IP in the access log
> - [CIDRWhitelist](#cidr-whitelist) Middleware
>
> **Recommended to use on entrypoint**

| Option      | Description           | Default     | Required |
| ----------- | --------------------- | ----------- | -------- |
| `header`    | Real IP header        | `X-Real-IP` | No       |
| `from`      | List of trusted CIDRs |             | Yes      |
| `recursive` | Recursive mode        | `true`      | No       |

| Recursive mode | Description                                             |
| -------------- | ------------------------------------------------------- |
| `true`         | Choose the first IP that does not match the `from` list |
| `false`        | Choose the last IP that does not match the `from` list  |

Example:

- `X-Forwarded-For: 1.2.3.4, 192.168.0.123, 10.0.0.123`
- `from: 192.168.0.0/16`

| Recursive mode | Result       |
| -------------- | ------------ |
| `true`         | `1.2.3.4`    |
| `false`        | `10.0.0.123` |

```yaml
# entrypoint
entrypoint:
  middlewares:
    - use: real_ip
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

Name: `cloudflare_real_ip`

> [!NOTE]
>
> This middleware requires no additional configuration.
>
> It is a preset of [Real IP](#real-ip) for Cloudflare Proxy/Tunnels. It will skip all local IPs.

#### Preset Values

| Option      | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `header`    | `CF-Connecting-IP`                                            |
| `from`      | List of Cloudflare IPs (updated hourly from official sources) |
| `recursive` | `true`                                                        |

Trusted IPs:

- <https://www.cloudflare.com/ips-v4>
- <https://www.cloudflare.com/ips-v6>
- all local IPs

### CIDR Whitelist

Name: `cidr_whitelist`

[See Request Level Access Control](Access-Control#request-level)

### Rate Limiter

Name: `rate_limit`

| Option    | Description                                    | Default | Required |
| --------- | ---------------------------------------------- | ------- | -------- |
| `average` | Average requests per period                    |         | Yes      |
| `burst`   | Maximum number of requests allowed in a period |         | Yes      |
| `periods` | Time period in format `number[unit]`           | `1s`    | No       |

### Modify request or response

Names:

- `modify_request` or `request`
- `modify_response` or `response`

| Option         | Description        | Default | Required |
| -------------- | ------------------ | ------- | -------- |
| `set_headers`  | Set headers        |         | No       |
| `add_headers`  | Add headers        |         | No       |
| `hide_headers` | Hide headers       |         | No       |
| `add_prefix`   | Add prefix to path |         | No       |

#### Supported variables

> [!NOTE]
>
> To use variables, add `$` **(`$$` for docker compose)** before the variable name.
>
> Single `$` in docker compose is treated as environment variables.

| Variable              | Description                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------- |
| `req_method`          | request http method                                                                       |
| `req_scheme`          | request URL scheme (http/https)                                                           |
| `req_host`            | request host without port                                                                 |
| `req_port`            | request port                                                                              |
| `req_addr`            | request host with port (if present)                                                       |
| `req_path`            | request URL path                                                                          |
| `req_query`           | raw query string                                                                          |
| `req_url`             | full request URL                                                                          |
| `req_uri`             | request URI (encoded path?query)                                                          |
| `req_content_type`    | request Content Type header                                                               |
| `req_content_length`  | length of request body (if present)                                                       |
| `remote_addr`         | client's remote address (may changed by middlewares like `RealIP` and `CloudflareRealIP`) |
| `remote_host`         | client's remote IP, parsed from `remote_addr`                                             |
| `remote_port`         | client's remote port, parsed from `remote_addr` (may be empty)                            |
| `resp_content_type`   | response Content Type header                                                              |
| `resp_content_length` | length of the response body                                                               |
| `status_code`         | response status code                                                                      |
| `upstream_name`       | upstream server name (alias)                                                              |
| `upstream_scheme`     | upstream server scheme                                                                    |
| `upstream_host`       | upstream server host                                                                      |
| `upstream_port`       | upstream server port                                                                      |
| `upstream_addr`       | upstream server address with port (if present)                                            |
| `upstream_url`        | full upstream server URL                                                                  |
| `header(name)`        | get request header by name                                                                |
| `resp_header(name)`   | get response header by name                                                               |
| `arg(name)`           | get URL query parameter by name                                                           |

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
        X-Real-IP: $remote_host
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

Name: `hide_x_forwarded`

Remove `Forwarded` and `X-Forwarded-*` headers before the request is sent to the upstream service.

```yaml
# docker labels
proxy.myapp.middlewares.hide_x_forwarded:

# route file
myapp:
  middlewares:
    hide_x_forwarded:
```

#### Set X-Forwarded Headers

Name: `set_x_forwarded`

Replace existing `X-Forwarded-*` headers with headers provided by GoProxy.

```yaml
# docker labels
proxy.myapp.middlewares.set_x_forwarded:

# route file
myapp:
  middlewares:
    set_x_forwarded:
```

### Modify HTML

Name: `modify_html`

Inject or replace HTML content in HTTP responses using CSS selectors.

| Option    | Description                                       | Default | Required |
| --------- | ------------------------------------------------- | ------- | -------- |
| `target`  | CSS selector for target element                   |         | Yes      |
| `html`    | HTML content to inject                            |         | Yes      |
| `replace` | Replace target element instead of appending to it | `false` | No       |

#### Behavior

- **Content-Type filtering**: Only processes HTML responses (`text/html`, `application/xhtml+xml`)
- **Append mode** (default): Appends HTML content to the **first** matching target element
- **Replace mode**: Replaces **all** matching target elements with the specified HTML content
- **Error handling**: Gracefully handles malformed HTML and missing targets
- **Content-Length**: Automatically updates the `Content-Length` header

#### CSS Selectors

Supports standard CSS selectors, e.g.:

| Selector Type | Example                | Description               |
| ------------- | ---------------------- | ------------------------- |
| Element       | `body`, `head`, `div`  | Select by element name    |
| ID            | `#main`                | Select by ID attribute    |
| Class         | `.container`           | Select by class attribute |
| Attribute     | `[data-test='target']` | Select by attribute value |

#### Modify HTML Examples

##### Inject CSS into head

```yaml
# docker labels
proxy.myapp.middlewares.modify_html: |
  target: head
  html: '<style>body { background-color: red; }</style>'

# route file
myapp:
  middlewares:
    modify_html:
      target: head
      html: '<style>body { background-color: red; }</style>'
```

##### Add footer to body

```yaml
# docker labels
proxy.myapp.middlewares.modify_html: |
  target: body
  html: <footer>Footer content</footer>

# route file
myapp:
  middlewares:
    modify_html:
      target: body
      html: <footer>Footer content</footer>
```

##### Replace main content

```yaml
# docker labels
proxy.myapp.middlewares.modify_html: |
  target: main
  html: <section><h2>New Content</h2></section>
  replace: true

# route file
myapp:
  middlewares:
    modify_html:
      target: main
      html: <section><h2>New Content</h2></section>
      replace: true
```

##### Complex injection with scripts and styles

```yaml
# route file
myapp:
  middlewares:
    modify_html:
      target: body
      html: |
        <script src="/static/app.js"></script>
        <link rel="stylesheet" href="/static/style.css"/>
```

### Themed

Name: `themed`

Easily injects a theme CSS into the HTML response.

| Option        | Description                    | Allowed Values                            |
| ------------- | ------------------------------ | ----------------------------------------- |
| `theme`       | Predefined theme name          | `dark`, `dark-grey`, `solarized-dark`     |
| `font_url`    | Custom Font URL                | Full URL                                  |
| `font_family` | Font family name of above font | string                                    |
| `css`         | Custom CSS                     | URL, File with `file://` prefix, Full CSS |

#### Example

```yaml
app:
  middlewares:
    themed:
      theme: dark
      font_url: https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap
      font_family: Inter
      css: |
        body {
          color: red !important;
        }
      # or
      css: file://path/to/custom.css
      # or
      css: https://example.com/custom.css
```

#### Multiple Targets

When multiple elements match the CSS selector:

- **Append mode**: Only the **first** matching element is modified
- **Replace mode**: **All** matching elements are replaced

Example with multiple `.container` elements:

```html
<!-- Original -->
<div class="container">First container</div>
<div class="container">Second container</div>

<!-- Append mode: target=".container", html="<p>Added</p>" -->
<div class="container">First container<p>Added</p></div>
<div class="container">Second container</div>

<!-- Replace mode: target=".container", html="<p>Replaced</p>", replace=true -->
<p>Replaced</p>
<p>Replaced</p>
```

#### Supported Content Types

The middleware only processes HTML content types:

- `text/html`
- `text/html; charset=utf-8`
- `application/xhtml+xml`

#### Error Handling

The middleware handles errors gracefully:

- **Invalid HTML**: Restores original content and logs warning
- **Target not found**: Returns original content unchanged
- **Malformed selectors**: No modification occurs
- **Empty HTML injection**: No visible change but processes normally
