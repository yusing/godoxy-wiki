# Middlewares

Middleware system allows you to modify, filter, and enhance HTTP requests and responses in GoDoxy. Middlewares can be applied at different levels and in different ways to provide flexible request processing.

## Quick Start

### Application Methods

Middlewares can be applied in four ways:

| Method                 | Order       | Use Case                                 | Configuration              |
| ---------------------- | ----------- | ---------------------------------------- | -------------------------- |
| **Entrypoint**         | Ordered     | Global middlewares applied to all routes | `config.yml`               |
| **Middleware Compose** | Ordered     | Reusable middleware configurations       | `config/middlewares/*.yml` |
| **Docker Labels**      | Unordered\* | Per-route middlewares                    | Container labels           |
| **Route Files**        | Unordered\* | Per-route middlewares                    | Route configuration files  |

> [!TIP]
> For unordered middlewares, set `priority` manually when order matters.

### Basic Example

```yaml
# Global middleware (entrypoint)
entrypoint:
  middlewares:
    - use: real_ip
      header: X-Real-IP
      from: [127.0.0.1, 192.168.0.0/16]

# Per-service middleware (Docker labels)
services:
  app:
    ...
    labels:
      proxy.aliases: myapp
      proxy.myapp.middlewares.redirectHTTP.priority: 1
      proxy.myapp.middlewares.cidrWhiteList.priority: 2
      proxy.myapp.middlewares.cidrWhiteList.allow: 127.0.0.1, 10.0.0.0/16
```

### Naming Convention

Middleware names and option keys are **case-insensitive**. All these are equivalent:

- `redirectHTTP`
- `redirect_http`
- `RedirectHttp`

## Configuration Syntax

### 1. Entrypoint & Middleware Compose

**Ordered execution** - middlewares run in the order they're defined.

```yaml
# Entrypoint (config.yml)
entrypoint:
  middlewares:
    - use: CloudflareRealIP
    - use: CIDRWhitelist
      allow:
        - 127.0.0.1
        - 223.0.0.0/8

# Middleware Compose (config/middlewares/whitelist.yml)
myWhitelist:
  - use: CloudflareRealIP
  - use: CIDRWhitelist
    allow:
      - 127.0.0.1
      - 223.0.0.0/8
```

### 2. Docker Labels

**Unordered execution** - use `priority` to control order.

```yaml
# Single line format
proxy.#1.middlewares.{middlewareName}.{optionName}: { value }
proxy.#1.middlewares.{middlewareName}.{optionName2}: { value2 }

# YAML block format
proxy.#1.middlewares.{middlewareName}: |
  {optionName}: {value}
  {optionName2}: {value2}
```

### 3. Route Files

**Unordered execution** - use `priority` to control order.

```yaml
myapp:
  middlewares:
    { middlewareName }:
      { optionName }: { value }
      { optionName2 }: { value2 }
```

### 4. Reusing Middleware Compositions

Reference composed middlewares across different configuration methods:

```yaml
# Docker labels
services:
  app:
    labels:
      proxy.#1.middlewares.myWhitelist@file:

# Route file
myapp:
  middlewares:
    myWhitelist@file:

# Entrypoint
entrypoint:
  middlewares:
    - use: myWhitelist@file
```

### 5. Bypass Rules

Skip middleware execution based on matching conditions.

```yaml
middleware:
  bypass:
    - route myapp & path glob(/api/*)
    - remote 192.168.0.0/16
    - header User-Agent: *bot*
```

> See [Rules syntax](./Rule-Based-Routing.md#syntax) for complete bypass rule documentation.

## Common Examples

### Basic Configuration Examples

```yaml
# Global middleware (config.yml)
entrypoint:
  middlewares:
    - use: cidr_whitelist
      allow:
        - 127.0.0.1
        - 10.0.0.0/16

# Docker labels - YAML style
proxy.#1.middlewares.cidr_whitelist.allow: |
  - 127.0.0.1
  - 10.0.0.0/16

# Docker labels - single line
proxy.#1.middlewares.cidr_whitelist.allow: 127.0.0.1, 10.0.0.0/16

# Route file with multiple middlewares
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

### Advanced: OIDC with Bypass Rules

> [!WARNING]
> **Global OIDC configuration can be complex. Test thoroughly in a development environment first.**

```yaml
# Global OIDC with bypass rules (config.yml)
entrypoint:
  middlewares:
    - use: oidc
      bypass:
        # Bypass specific routes
        - route pocket-id
        - route immich & glob(path /api/*)
        - route karakeep & glob(path /api/v1/*)
        # Bypass local networks
        - remote 127.0.0.1
        - remote 192.168.0.0/16
        - remote 10.0.0.0/8
        - remote 172.16.0.0/12
        - remote 100.64.0.0/10

# Per-service OIDC bypass (Docker labels)
services:
  vaultwarden:
    labels:
      # Allow Bitwarden apps to bypass OIDC
      proxy.#1.middlewares.oidc.bypass: path glob(/identity/*) | path glob(/api/*) | path glob(/icons/*)

  karakeep:
    labels:
      proxy.#1.middlewares.oidc.bypass: path glob(/api/v1/*)
```

## Available Middlewares

### Authentication and Security

#### OIDC (OpenID Connect)

**Name:** `oidc`  
**Purpose:** Authenticate users using OpenID Connect protocol

Uses settings from `.env` file with configurable overrides.

| Option           | Description             | Default                      | Required |
| ---------------- | ----------------------- | ---------------------------- | -------- |
| `allowed_users`  | Override allowed users  | `GODOXY_OIDC_ALLOWED_USERS`  | No       |
| `allowed_groups` | Override allowed groups | `GODOXY_OIDC_ALLOWED_GROUPS` | No       |
| `client_id`      | Override client ID      | `GODOXY_OIDC_CLIENT_ID`      | No       |
| `client_secret`  | Override client secret  | `GODOXY_OIDC_CLIENT_SECRET`  | No       |
| `scope`          | Override OAuth scope    | `GODOXY_OIDC_SCOPE`          | No       |

#### hCaptcha

**Name:** `hcaptcha`  
**Purpose:** Protect against bots using [hCaptcha](https://hcaptcha.com/) challenges

| Option           | Description         | Default | Required |
| ---------------- | ------------------- | ------- | -------- |
| `site_key`       | hCaptcha site key   | -       | Yes      |
| `secret_key`     | hCaptcha secret key | -       | Yes      |
| `session_expiry` | Session expiry time | `24h`   | No       |

**How it works:**

1. User sees captcha landing page before accessing protected route
2. After solving captcha, user is redirected to the real page
3. Captcha must be solved again after each `session_expiry` period

![captcha page light](images/captcha-page-light.png)
![captcha page dark](images/captcha-page-dark.png)

#### Forward Auth

**Name:** `forward_auth`  
**Purpose:** Delegate authentication to external auth service

Authenticates requests by sending metadata to an external auth service and either forwards the request upstream (with enriched headers) or returns the auth response to the client.

| Option          | Description                                             | Default                                                           | Required |
| --------------- | ------------------------------------------------------- | ----------------------------------------------------------------- | -------- |
| `route`         | Forward-auth route name (alias) pointing to auth server | `tinyauth`                                                        | Yes      |
| `auth_endpoint` | Auth server endpoint path                               | `/api/auth/traefik`                                               | Yes      |
| `headers`       | Headers to forward from auth server to upstream         | `["Remote-User", "Remote-Name", "Remote-Email", "Remote-Groups"]` | No       |

**Behavior:**

1. Sends GET request to auth service at `route origin + auth_endpoint`
2. Clones request headers and populates X-Forwarded-\* headers
3. **Non-2xx/3xx response:** Returns auth response to client (including redirects)
4. **2xx response:** Copies configured headers to request and forwards upstream

**Example:**

```yaml
# Docker labels
proxy.myapp.middlewares.forward_auth: |
  route: tinyauth
  auth_endpoint: /api/auth/traefik
  headers: Remote-User, Remote-Name, Remote-Email, Remote-Groups

# Route file
myapp:
  middlewares:
    forward_auth:
      route: tinyauth
      auth_endpoint: /api/auth/traefik
      headers: Remote-User, Remote-Name, Remote-Email, Remote-Groups
```

### Traffic Control

#### Redirect HTTP

**Name:** `redirect_http`  
**Purpose:** Redirect HTTP requests to HTTPS

Simple middleware with no configuration options.

#### Custom Error Pages

**Name:** `custom_error_pages`  
**Purpose:** Customize error page responses

See [Custom Error Pages](Custom-Error-Pages) for detailed documentation.

### IP Resolution

#### Real IP

**Name:** `real_ip`  
**Purpose:** Resolve correct client IP from proxy headers

> [!NOTE]
> **Recommended for entrypoint** - affects `$remote_addr`, `$remote_host`, access logs, and CIDRWhitelist middleware.

| Option      | Description                  | Default     | Required |
| ----------- | ---------------------------- | ----------- | -------- |
| `header`    | Real IP header name          | `X-Real-IP` | No       |
| `from`      | List of trusted CIDRs or IPs | -           | Yes      |
| `recursive` | Recursive mode               | `true`      | No       |

**Recursive Mode:**

- `true`: Choose first IP that doesn't match `from` list
- `false`: Choose last IP that doesn't match `from` list

**Example:**

- `X-Forwarded-For: 1.2.3.4, 192.168.0.123, 10.0.0.123`
- `from: 192.168.0.0/16, 10.0.0.1`

| Recursive | Result       |
| --------- | ------------ |
| `true`    | `1.2.3.4`    |
| `false`   | `10.0.0.123` |

```yaml
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

#### Cloudflare Real IP

**Name:** `cloudflare_real_ip`  
**Purpose:** Cloudflare real IP resolution for Cloudflare Proxy/Tunnels

> [!NOTE]
> This preset skips all local IPs.

**Preset Values:**

- `header`: `CF-Connecting-IP`
- `from`: Cloudflare IPs (updated hourly from official sources)
- `recursive`: `true`

**Trusted IPs:**

- [Cloudflare IPv4](https://www.cloudflare.com/ips-v4)
- [Cloudflare IPv6](https://www.cloudflare.com/ips-v6)
- All local IPs

### Access Control

#### CIDR Whitelist

**Name:** `cidr_whitelist`  
**Purpose:** Allow/deny requests based on client IP ranges

[See request-level access control](./Access-Control.md#request-level) for detailed documentation.

#### Rate Limiter

**Name:** `rate_limit`  
**Purpose:** Limit request rate per client

| Option    | Description                          | Default | Required |
| --------- | ------------------------------------ | ------- | -------- |
| `average` | Average requests per period          | -       | Yes      |
| `burst`   | Maximum requests allowed in a period | -       | Yes      |
| `periods` | Time period format: `number[unit]`   | `1s`    | No       |

**Example:**

```yaml
rate_limit:
  average: 10
  burst: 20
  periods: 1m
```

### Request and Response Modification

#### Modify Request or Response

**Names:** `modify_request` / `request` / `modify_response` / `response`  
**Purpose:** Modify HTTP headers and paths before sending to upstream

| Option         | Description                | Default | Required |
| -------------- | -------------------------- | ------- | -------- |
| `set_headers`  | Set/replace headers        | -       | No       |
| `add_headers`  | Add additional headers     | -       | No       |
| `hide_headers` | Remove headers             | -       | No       |
| `add_prefix`   | Add prefix to request path | -       | No       |

#### Supported Variables

> [!NOTE]
> Use `$` prefix for variables for YAML files.
>
> **Use `$$` in Docker Compose, single `$` will result in environment variable substitution.**

| Variable               | Description                   |
| ---------------------- | ----------------------------- |
| **Request Variables**  |                               |
| `req_method`           | HTTP method (GET, POST, etc.) |
| `req_scheme`           | URL scheme (http/https)       |
| `req_host`             | Host without port             |
| `req_port`             | Port number                   |
| `req_addr`             | Host with port                |
| `req_path`             | URL path                      |
| `req_query`            | Raw query string              |
| `req_url`              | Full request URL              |
| `req_uri`              | Encoded path?query            |
| `req_content_type`     | Content-Type header           |
| `req_content_length`   | Request body length           |
| **Client Variables**   |                               |
| `remote_addr`          | Client IP address             |
| `remote_host`          | Client IP (parsed)            |
| `remote_port`          | Client port                   |
| **Response Variables** |                               |
| `resp_content_type`    | Response Content-Type         |
| `resp_content_length`  | Response body length          |
| `status_code`          | HTTP status code              |
| **Upstream Variables** |                               |
| `upstream_name`        | Server name/alias             |
| `upstream_scheme`      | Server scheme                 |
| `upstream_host`        | Server host                   |
| `upstream_port`        | Server port                   |
| `upstream_addr`        | Server address with port      |
| `upstream_url`         | Full server URL               |
| **Dynamic Variables**  |                               |
| `header(name)`         | Get request header            |
| `resp_header(name)`    | Get response header           |
| `arg(name)`            | Get query parameter           |

#### Header Modification Examples

**Set Headers (Replace existing):**

```yaml
# Docker labels
proxy.myapp.middlewares.request.set_headers: |
  X-Custom-Header1: value1, value2
  X-Real-IP: $$remote_host

# Route file
myapp:
  middlewares:
    request:
      set_headers:
        X-Custom-Header1: value1, value2
        X-Real-IP: $remote_host
```

**Add Headers (Append to existing):**

```yaml
# Docker labels
proxy.myapp.middlewares.request.add_headers: |
  X-Custom-Header1: value1, value2
  X-Custom-Header2: value3

# Route file
myapp:
  middlewares:
    request:
      add_headers:
        X-Custom-Header1: value1, value2
        X-Custom-Header2: value3
```

**Hide Headers (Remove from upstream or response):**

```yaml
# Docker labels - Example: Hide headers from upstream
proxy.myapp.middlewares.request.hide_headers: X-Real-IP, X-Forwarded-For

# Route file - Example: Hide headers from response
myapp:
  middlewares:
    response:
      hide_headers:
        - X-Custom-Header1
        - X-Custom-Header2
```

#### X-Forwarded Headers

##### Hide X-Forwarded Headers

**Name:** `hide_x_forwarded`  
**Purpose:** Remove `Forwarded` and `X-Forwarded-*` headers before sending to upstream

```yaml
# Docker labels
proxy.myapp.middlewares.hide_x_forwarded:

# Route file
myapp:
  middlewares:
    hide_x_forwarded:
```

##### Set X-Forwarded Headers

**Name:** `set_x_forwarded`  
**Purpose:** Override `X-Forwarded-*` headers with GoProxy-provided headers (instead of appending)

```yaml
# Docker labels
proxy.myapp.middlewares.set_x_forwarded:

# Route file
myapp:
  middlewares:
    set_x_forwarded:
```

### Content Modification

#### Modify HTML

**Name:** `modify_html`  
**Purpose:** Inject or replace HTML content using CSS selectors

| Option    | Description                     | Default | Required |
| --------- | ------------------------------- | ------- | -------- |
| `target`  | CSS selector for target element | -       | Yes      |
| `html`    | HTML content to inject          | -       | Yes      |
| `replace` | Replace instead of append       | `false` | No       |

**Behavior:**

- **Content-Type filtering**: Only processes HTML responses
  - `text/html`
  - `application/xhtml+xml`
- **Append mode** (default): Appends to **first** matching element
- **Replace mode**: Replaces **all** matching elements
- **Error handling**: Gracefully handles malformed HTML and missing targets
- **Content-Length**: Automatically updates response headers

**Multiple Target Behavior:**

When multiple elements match the CSS selector:

- **Append mode**: Only the **first** matching element is modified
- **Replace mode**: **All** matching elements are replaced

**Example with multiple `.container` elements:**

```html
<!-- Original -->
<div class="container">First container</div>
<div class="container">Second container</div>

<!-- Append mode: target=".container", html="<p>Added</p>" -->
<div class="container">
  First container
  <p>Added</p>
</div>
<div class="container">Second container</div>

<!-- Replace mode: target=".container", html="<p>Replaced</p>", replace=true -->
<p>Replaced</p>
<p>Replaced</p>
```

**Error Handling:**

- **Invalid HTML**: Restores original content and logs warning
- **Target not found**: Returns original content unchanged
- **Malformed selectors**: No modification occurs
- **Empty HTML injection**: No visible change but processes normally

**Supported CSS Selectors:**

| Type      | Example                | Description               |
| --------- | ---------------------- | ------------------------- |
| Element   | `body`, `head`, `div`  | Select by element name    |
| ID        | `#main`                | Select by ID attribute    |
| Class     | `.container`           | Select by class attribute |
| Attribute | `[data-test='target']` | Select by attribute value |

**Examples:**

**Inject CSS into head:**

```yaml
# Docker labels
proxy.myapp.middlewares.modify_html: |
  target: head
  html: '<style>body { background-color: red; }</style>'

# Route file
myapp:
  middlewares:
    modify_html:
      target: head
      html: '<style>body { background-color: red; }</style>'
```

**Add footer to body:**

```yaml
# Docker labels
proxy.myapp.middlewares.modify_html: |
  target: body
  html: <footer>Footer content</footer>

# Route file
myapp:
  middlewares:
    modify_html:
      target: body
      html: <footer>Footer content</footer>
```

**Replace main content:**

```yaml
# Docker labels
proxy.myapp.middlewares.modify_html: |
  target: main
  html: <section><h2>New Content</h2></section>
  replace: true

# Route file
myapp:
  middlewares:
    modify_html:
      target: main
      html: <section><h2>New Content</h2></section>
      replace: true
```

**Complex injection with scripts and styles:**

```yaml
# Route file
myapp:
  middlewares:
    modify_html:
      target: body
      html: |
        <script src="/static/app.js"></script>
        <link rel="stylesheet" href="/static/style.css"/>
```

#### Themed

**Name:** `themed`  
**Purpose:** A preset for `modify_html` that easily injects theme CSS into HTML responses

| Option        | Description           | Conflicts With | Allowed Values                            |
| ------------- | --------------------- | -------------- | ----------------------------------------- |
| `theme`       | Predefined theme name | `css`          | `dark`, `dark-grey`, `solarized-dark`     |
| `font_url`    | Custom font URL       | -              | Full URL                                  |
| `font_family` | Font family name      | -              | String                                    |
| `css`         | Custom CSS            | `theme`        | URL, File with `file://` prefix, Full CSS |

**Example:**

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
