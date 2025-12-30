# Rule-Based Routing

> [!WARNING]
> **Experimental Feature**
>
> This feature is experimental and not fully tested. Everything, including syntax, may change until it is considered complete and stable.

## Overview

Rule-based routing allows you to define custom routing logic for incoming requests. Rules can match requests based on various conditions (headers, query parameters, cookies, etc.) and execute specific actions (serve files, proxy requests, redirect, etc.).

## Rule Structure

Each rule consists of three main fields:

| Field  | Required        | Description                                           |
| ------ | --------------- | ----------------------------------------------------- |
| `name` | No              | Rule identifier (optional, except for `default` rule) |
| `on`   | Yes<sup>1</sup> | Trigger conditions                                    |
| `do`   | Yes             | Actions to execute when conditions match              |

<sup>1</sup> not required for default rule (`name=default`)

## Rule Behavior

- **Rule Matching**: Rules are evaluated in order. The first matching rule is executed.
- **Default Rule**: When no rule matches, the `default` rule (if defined) will be executed.
- **Fallback**: When no rule matches and no `default` rule is defined, the request is passed to the reverse proxy.
- **Pass Action**: When `do` is set to `pass`, the request is passed through to the reverse proxy.

## Syntax Reference

### Quoting and Escaping

Like in Linux shell, values containing spaces and quotes should be quoted or escaped:

```sh
header Some-Header "foo bar"     # Double quotes
header Some-Header 'foo bar'     # Single quotes
header Some-Header foo\ bar      # Escaped space
header Some-Header 'foo \"bar\"' # Escaped quotes inside single quotes
```

### Supported Escape Sequences

| Sequence | Description              | Context                       |
| -------- | ------------------------ | ----------------------------- |
| `\n`     | New line                 | String values, regex patterns |
| `\t`     | Tab                      | String values, regex patterns |
| `\r`     | Carriage return          | String values, regex patterns |
| `\\`     | Backslash                | String values, regex patterns |
| `\"`     | Double quote             | String values                 |
| `\'`     | Single quote             | String values                 |
| `\`      | Space                    | String values                 |
| `$$`     | Dollar sign (literal)    | Any                           |
| `\b`     | Word boundary            | Regex patterns only           |
| `\B`     | Non-word boundary        | Regex patterns only           |
| `\s`     | Whitespace character     | Regex patterns only           |
| `\S`     | Non-whitespace character | Regex patterns only           |
| `\w`     | Word character           | Regex patterns only           |
| `\W`     | Non-word character       | Regex patterns only           |
| `\d`     | Digit character          | Regex patterns only           |
| `\D`     | Non-digit character      | Regex patterns only           |
| `\$`     | Dollar sign (literal)    | Regex patterns only           |
| `\.`     | Dot (literal)            | Regex patterns only           |

### Environment Variable Substitution

Environment variables can be substituted using `${VARIABLE_NAME}` syntax:

```sh
error 403 "Forbidden: ${CLOUDFLARE_API_KEY}"
forward https://${DOMAIN}/api
auth "user-${DOMAIN}-admin" "password"
```

To escape the `$` character and prevent substitution, use `$$`:

```sh
error 404 "$${NON_EXISTENT}" # Results in literal "${NON_EXISTENT}"
```

### Pattern Matching

Conditions that match values now support three types of patterns:

| Pattern Type | Syntax               | Description                       |
| ------------ | -------------------- | --------------------------------- |
| **String**   | `"value"` or `value` | Exact string match                |
| **Glob**     | `glob(pattern)`      | Glob pattern matching (wildcards) |
| **Regex**    | `regex(pattern)`     | Regular expression matching       |

> [!NOTE]
>
> Quotes are optional for regex and glob

#### Pattern Examples

```sh
# String matching (default)
header X-API-Key "secret-key"

# Glob pattern matching
header User-Agent glob(Mozilla*)
path glob(/api/v[0-9]/*)

# Regular expression matching
header X-API-Key regex("^sk-[a-zA-Z0-9]{32}$")
path regex("^/api/v[0-9]+/users/[a-f0-9-]{36}$")
```

## Conditions (`on`)

The `on` field defines the conditions that must be met for a rule to execute. Conditions can be combined using logical operators.

### Logical Operators

| Operator    | Description                         | Example                                    |
| ----------- | ----------------------------------- | ------------------------------------------ |
| `\|`        | **OR** - Any condition can match    | `header X-API-Key \| header Authorization` |
| `&` or `\n` | **AND** - All conditions must match | `method GET & path /api/*`                 |

### Syntax

```plain
<condition> <args> [[ | <condition> <args> ] [ & <condition> <args> ]]...
```

### Available Conditions

| Condition     | Arguments                      | Description                                | Example                                                                              |
| ------------- | ------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| `header`      | `<name> <pattern>`             | Match when request header matches pattern  | `header Content-Type application/json`, `header X-API-Key regex("^sk-.*")`           |
| `header`      | `<name>`                       | Match when header exists (any value)       | `header X-API-Key`                                                                   |
| `query`       | `<name> <pattern>`             | Match when query parameter matches pattern | `query debug true`, `query id regex("^[a-f0-9-]{36}$")`                              |
| `query`       | `<name>`                       | Match when query parameter exists          | `query debug`                                                                        |
| `cookie`      | `<name> <pattern>`             | Match when cookie matches pattern          | `cookie session_id abc123`, `cookie token glob("sess_*")`                            |
| `cookie`      | `<name>`                       | Match when cookie exists                   | `cookie session_id`                                                                  |
| `form`        | `<name> <pattern>`             | Match when form field matches pattern      | `form action submit`, `form email regex("^[^@]+@[^@]+$")`                            |
| `form`        | `<name>`                       | Match when form field exists               | `form action`                                                                        |
| `postform`    | `<name> <pattern>`             | Match when POST form field matches pattern | `postform action submit`, `postform file glob("*.pdf")`                              |
| `postform`    | `<name>`                       | Match when POST form field exists          | `postform action`                                                                    |
| `proto`       | `<http \| https \| h3>`        | Match when protocol equals value           | `proto http`                                                                         |
| `method`      | `<method>`                     | Match when HTTP method equals value        | `method POST`                                                                        |
| `host`        | `<pattern>`                    | Match when host matches pattern            | `host example.com`, `host glob(*.example.com)`, `host regex("^[a-z]+-prod\.com$")`   |
| `path`        | `<pattern>`                    | Match when path matches pattern            | `path /api/*`, `path regex("^/api/v[0-9]+/.*)`                                       |
| `remote`      | `<ip \| cidr>`                 | Match when client IP matches CIDR range    | `remote 192.168.1.0/24`                                                              |
| `route`       | `<pattern>`                    | Match when route name matches pattern      | `route api`, `route glob(api-*)`                                                     |
| `basic_auth`  | `<username> <hashed_password>` | Match when basic auth credentials match    | `basic_auth admin $2y$10$...`                                                        |
| `status`      | `<status>`                     | Match when status code matches value       | `status 200`, `status 200-300`, `status 2xx`                                         |
| `resp_header` | `<name> <pattern>`             | Match when response header matches pattern | `resp_header Content-Type application/json`, `resp_header X-API-Key regex("^sk-.*")` |
| `resp_header` | `<name>`                       | Match when response header exists          | `resp_header Content-Type`                                                           |

### Form Field Conditions

Both `form` and `postform` conditions match form field values, but they have different precedence orders:

#### `postform` Precedence Order

- Only matches the POST, PUT, or PATCH request body

#### `form` Precedence Order

1. `application/x-www-form-urlencoded` form body (POST, PUT, PATCH only)
2. Query parameters (always)
3. `multipart/form-data` form body (always)

#### Example

```sh
# For a POST request with query param ?action=query and form body action=form
postform action query    # Matches "query" (query param takes precedence)
form action form         # Matches "form" (only form body)
```

### Basic Authentication

For `basic_auth` conditions, the password must be bcrypt hashed. Generate the hash using:

```sh
htpasswd -nbB '' your-password | cut -c 2-
```

#### Basic Auth Concept

To protect a resource, you need to:

- Require basic authentication by default
- Allow specific users to pass through (or proxy to another service) with valid credentials

#### Example Basic Auth Rule

```yaml
services:
  app:
    container_name: app
    labels:
      proxy.app.rules: |
        - name: default
          do: require_basic_auth "Restricted Area"
        - name: authenticated users
          on: basic_auth user1 "$2y$10$..." | basic_auth user2 "$2y$10$..."
          do: pass
```

### Path Pattern Syntax

The `path` condition supports three types of patterns for matching request paths:

#### String Matching

```sh
path /api/users # Exact match for /api/users
```

#### Glob Patterns

Glob patterns use the following syntax based on the [github.com/gobwas/glob](https://github.com/gobwas/glob) library:

| Pattern   | Description                                       | Example                       | Matches                                      | Non-matches                              |
| --------- | ------------------------------------------------- | ----------------------------- | -------------------------------------------- | ---------------------------------------- |
| `*`       | Any sequence of non-separator characters          | `/api/*`                      | `/api/users`, `/api/posts`                   | `/api/users/123`, `/api/v1/users`        |
| `**`      | Any sequence of characters (including separators) | `/static/**`                  | `/static/css/style.css`, `/static/js/app.js` | -                                        |
| `?`       | Any single non-separator character                | `/file?.txt`                  | `/file1.txt`, `/fileA.txt`                   | `/file12.txt`, `/file/abc.txt`           |
| `[abc]`   | Character class (match any listed character)      | `/file[123].txt`              | `/file1.txt`, `/file2.txt`, `/file3.txt`     | `/file4.txt`, `/fileA.txt`               |
| `[!abc]`  | Negated character class (match any except listed) | `/file[!123].txt`             | `/fileA.txt`, `/fileB.txt`                   | `/file1.txt`, `/file2.txt`, `/file3.txt` |
| `[a-z]`   | Character range (match any in range)              | `/file[a-z].txt`              | `/filea.txt`, `/filem.txt`, `/filez.txt`     | `/fileA.txt`, `/file1.txt`               |
| `[0-9]`   | Numeric range                                     | `/v[0-9]/api`                 | `/v1/api`, `/v5/api`, `/v9/api`              | `/v10/api`, `/va/api`                    |
| `{a,b,c}` | Pattern alternatives (comma-separated)            | `/api/{users,posts,comments}` | `/api/users`, `/api/posts`, `/api/comments`  | `/api/products`, `/api/users/123`        |
| `\*`      | Literal asterisk (escaped)                        | `/file\*.txt`                 | `/file*.txt`                                 | `/fileabc.txt`, `/file123.txt`           |
| `\?`      | Literal question mark (escaped)                   | `/file\?.txt`                 | `/file?.txt`                                 | `/filea.txt`, `/file1.txt`               |

#### Advanced Glob Examples

```sh
# Match common web asset files
path glob("/static/**/*.{css,js,png,jpg,jpeg,gif,svg}")

# Match versioned API paths
path glob("/api/v[0-9]/*")

# Match UUID patterns (simplified)
path glob("/users/[a-f0-9-]*/profile")

# Match date-based paths
path glob("/logs/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/*")

# Match file extensions with character classes
path glob("/uploads/*.{[Pp][Dd][Ff],[Dd][Oo][Cc][Xx]}")

# Exclude specific patterns with negated character classes
path glob("/images/[!_]*")  # Exclude files starting with underscore
```

#### Regular Expressions

```sh
path regex("^/api/v[0-9]+/users/[a-f0-9-]{36}$")  # Match specific UUID pattern
path regex("^/files/[0-9]{4}-[0-9]{2}-[0-9]{2}$")  # Match date pattern
```

## Actions (`do`)

The `do` field defines the actions to execute when rule conditions are met.

### Action Execution Rules

- **Order**: Actions are executed in the order they are defined.
- **Command Types**: Actions are classified into different command types that determine their execution behavior:
  - **Non-terminating Commands**: Modify the request or response and continue execution
  - **Terminating Commands**: Return a response and continue on response handler execution
  - **Bypass Commands**: Skip all remaining rules, pass directly to the reverse proxy, then continue on response handler execution
  - **Response Handlers**: Execute after the upstream response is received

#### Command Type Classification

| Command Type          | Commands                                                    | Behavior                             |
| --------------------- | ----------------------------------------------------------- | ------------------------------------ |
| **Non-terminating**   | `rewrite`, `set`, `add`, `remove`                           | Modify request/response and continue |
| **Terminating**       | `serve`, `proxy`, `redirect`, `error`, `require_basic_auth` | Return response and stop execution   |
| **Bypass**            | `pass`, `bypass`                                            | Skip rules and pass to reverse proxy |
| **Response Handlers** | `log`, `notify`                                             | Execute after upstream response      |

#### Valid Action Sequences

```yaml
# ✅ Valid: Non-terminating actions followed by terminating action
on: method GET
do: |
  rewrite / /index.html
  serve /static

# ✅ Valid: Multiple non-terminating actions
on: method POST
do: |
  set header X-Custom value
  add query debug true
  remove header X-Secret

# ✅ Valid: Response handlers (they always run last)
on: path /api/*
do: |
  proxy http://backend:8080
  log info /dev/stdout "$req_method $status_code"

# ✅ Valid: Bypass command (passes to reverse proxy)
on: header X-Bypass true
do: bypass

# ✅ Valid: Response handler before terminating action
#           but $status_code will always be 200 and $resp_header(...) will be empty
on: method GET
do: |
  log info /dev/stdout "$req_method $req_url $status_code"
  set resp_header X-Custom value
  error 500 "Internal Error" # won't be logged

# ❌ Invalid: Terminating action followed by another action
on: method GET
do: |
  serve /static/index.html
  serve /static/404.html
```

### Available Actions

| Action               | Arguments                               | Terminating | Description                                                     | Example                      |
| -------------------- | --------------------------------------- | ----------- | --------------------------------------------------------------- | ---------------------------- |
| `require_auth`       |                                         | true        | Require authentication (Userpass or OIDC based on env variable) | `require_auth`               |
| `rewrite`            | `<from> <to>`                           | false       | Rewrite request path                                            | `rewrite /api /backend`      |
| `serve`              | `<path>`                                | true        | Serve static files/directory                                    | `serve /static`              |
| `proxy`              | `<url \| path>`                         | true        | Proxy request to absolute or relative path                      | `proxy http://backend:8080`  |
| `route`              | `<route_name>`                          | true        | Route request to route name (including exclude routes)          | `route app-backend`          |
| `redirect`           | `<url \| path>`                         | true        | Redirect to absolute or relative path                           | `redirect /login`            |
| `error`              | `<status> <template>`                   | true        | Return error response                                           | `error 403 "Forbidden"`      |
| `require_basic_auth` | `<realm>`                               | true        | Set `WWW-Authenticate` header and return 401                    | `require_basic_auth "Admin"` |
| `set`                | `<field> <key> <template>`              | false       | Set field value                                                 | `set headers X-Custom value` |
| `add`                | `<field> <key> <template>`              | false       | Add value to field                                              | `add headers X-Custom value` |
| `remove`             | `<field> <key>`                         | false       | Remove field key                                                | `remove headers X-Custom`    |
| `log`                | `<level> <path> <template>`             | false\*     | Log message (response handler)                                  | See below                    |
| `notify`             | `<level> <service_name> <title> <body>` | false\*     | Send notification (response handler)                            | See below                    |
| `pass`               |                                         | true        | Pass to reverse proxy                                           | `pass`                       |
| `bypass`             |                                         | true        | Pass to reverse proxy (alias for pass)                          | `bypass`                     |

#### `log` example

```sh
log info /dev/stdout "$req_method $req_url $status_code"
```

#### `notify` example

```sh
notify info ntfy "Request received" "$req_method $status_code"
```

\*Response handlers execute after the upstream response and do not terminate execution by themselves.

## Template Variables

Template variables can be used in `error`, `log`, `notify`, `set`, `add`, `body`, and `resp_body` commands. Variables are expanded at runtime using the syntax `$variable_name` or `$function_name(args)`.

### Static Variables

Static variables provide information about the request, response, and upstream service.

| Variable                         | Description                | Example Value                         |
| -------------------------------- | -------------------------- | ------------------------------------- |
| **Request Information**          |
| `$req_method`                    | HTTP request method        | `GET`, `POST`, `PUT`, etc.            |
| `$req_scheme`                    | Request scheme             | `http` or `https`                     |
| `$req_host`                      | Request host without port  | `example.com`                         |
| `$req_port`                      | Request port               | `80`, `443`, `8080`                   |
| `$req_addr`                      | Request host with port     | `example.com:443`                     |
| `$req_path`                      | Request path               | `/api/users`                          |
| `$req_query`                     | Query string (raw)         | `id=123&sort=desc`                    |
| `$req_url`                       | Full request URL           | `http://example.com/api/users?id=123` |
| `$req_uri`                       | Request URI (path + query) | `/api/users?id=123`                   |
| `$req_content_type`              | Request content type       | `application/json`                    |
| `$req_content_length`            | Request content length     | `1024`                                |
| **Remote Client Information**    |
| `$remote_host`                   | Client IP address          | `192.168.1.1`                         |
| `$remote_port`                   | Client port                | `54321`                               |
| `$remote_addr`                   | Client address with port   | `192.168.1.1:54321`                   |
| **Response Information**         |
| `$status_code`                   | HTTP response status code  | `200`, `404`, `500`                   |
| `$resp_content_type`             | Response content type      | `application/json`, `text/html`       |
| `$resp_content_length`           | Response content length    | `2048`                                |
| **Upstream Service Information** |
| `$upstream_name`                 | Upstream route name        | `api-backend`                         |
| `$upstream_scheme`               | Upstream scheme            | `http` or `https`                     |
| `$upstream_host`                 | Upstream host              | `backend.internal`                    |
| `$upstream_port`                 | Upstream port              | `8080`                                |
| `$upstream_addr`                 | Upstream host with port    | `backend.internal:8080`               |
| `$upstream_url`                  | Upstream URL               | `http://backend.internal:8080`        |

### Dynamic Variables (Functions)

Dynamic variables accept arguments and can extract specific values from headers, query parameters, and form data.

#### Request Headers: `$header(name)` or `$header(name, index)`

Extract header values from the request.

- **Arguments**:
  - `name` (required): Header name (case-sensitive)
  - `index` (optional): Index in the header value list (default: 0)

- **Example**:
  - `$header(User-Agent)` → `Mozilla/5.0...`
  - `$header(Accept, 0)` → `text/html`

#### Response Headers: `$resp_header(name)` or `$resp_header(name, index)`

Extract header values from the response.

- **Arguments**:
  - `name` (required): Header name (case-sensitive)
  - `index` (optional): Index in the header value list (default: 0)

- **Example**:
  - `$resp_header(Content-Type)` → `application/json`
  - `$resp_header(Set-Cookie, 0)` → `session_id=abc123`

#### Query Parameters: `$arg(name)` or `$arg(name, index)`

Extract query parameter values.

- **Arguments**:
  - `name` (required): Parameter name
  - `index` (optional): Index in the parameter value list (default: 0)

- **Example**:
  - `$arg(page)` → `1`
  - `$arg(filter, 0)` → `active`

#### Form Fields: `$form(name)` or `$form(name, index)`

Extract form field values with query parameter fallback. Searches in these sources (from req.Form):

- POST/PUT/PATCH form body (`application/x-www-form-urlencoded` and `multipart/form-data`)
- Query parameters

- **Arguments**:
  - `name` (required): Field name
  - `index` (optional): Index in the field value list (default: 0)

- **Example**:
  - `$form(username)` → `john_doe`
  - `$form(tags, 1)` → `backend` (second tag)

#### POST Form Fields: `$postform(name)` or `$postform(name, index)`

Extract form field values from POST/PUT/PATCH request bodies only (no query parameter fallback). Only matches `application/x-www-form-urlencoded` format.

- **Arguments**:
  - `name` (required): Field name
  - `index` (optional): Index in the field value list (default: 0)

- **Example**:
  - `$postform(action)` → matches only form field, not query parameter

### Variable Examples

Complete examples showing how to use variables in different commands:

```sh
# Logging with request and response information
log info /dev/stdout "Method=$req_method Path=$req_path Status=$status_code"

# Logging with headers
log info /dev/stdout "User-Agent=$header(User-Agent) Auth=$header(Authorization)"

# Logging with response headers
log info /dev/stdout "Content-Type=$resp_header(Content-Type) Content-Length=$resp_content_length"

# Notifications with request context
notify info ntfy "New request" "From $remote_host to $req_host at $req_path"

# Setting headers with upstream information
set headers X-Upstream-URL $upstream_url
set headers X-Request-Path $req_path

# Body modifications with request info
set body "Status: $status_code for $req_method $req_path"

# Response body with request and response info
set resp_body "Request: $req_method $req_url\nResponse: $status_code"
```

## Configuration Examples

### Docker Compose Configuration

```yaml
services:
  app:
    container_name: goaccess
    image: allinurl/goaccess
    labels:
      proxy.goaccess.rules: |
        - name: block specific user agents
          on: header User-Agent glob(*bot*) | header User-Agent regex(.+crawler.+)
          do: error 403 "Not allowed"
        - name: websocket
          on: |
            header Connection Upgrade
            header Upgrade websocket
          do: pass
        - name: default
          do: |
            rewrite / /report.html
            serve /tmp/access
```

### Route File Configuration

```yaml
goaccess:
  rules:
    - name: websocket
      on: |
        header Connection Upgrade
        header Upgrade websocket
      do: pass
    - name: default
      do: |
        rewrite / /report.html
        serve /tmp/access
```

### Config File Configuration

```yaml
entrypoint:
  rules:
    - name: websocket
      on: |
        header Connection Upgrade
        header Upgrade websocket
      do: pass
    - name: default
      do: |
        rewrite / /report.html
        serve /tmp/access
```

## Common Use Cases

### API Gateway with Authentication

```yaml
rules:
  - name: public endpoints
    on: path regex("^/api/v[0-9]+/public/.*")
    do: proxy http://api-server:8080

  - name: admin with specific credentials
    on: |
      path glob(/api/v[0-9]/admin/*)
      basic_auth admin $2y$10$hashed_password
    do: |
      set headers X-Admin true
      proxy http://admin-server:8080

  - name: protected endpoints with auth
    on: |
      path regex("^/api/v[0-9]+/protected/.*")
      basic_auth user1 $2y$10$hashed_password1 |
      basic_auth user2 $2y$10$hashed_password2
    do: proxy http://api-server:8080

  - name: require auth for protected
    on: path regex("^/api/v[0-9]+/protected/.*")
    do: |
      require_basic_auth "API Access"

  - name: require auth for admin
    on: path glob(/api/v[0-9]/admin/*)
    do: |
      require_basic_auth "Admin Access"
```

### Rate Limiting and Security

```yaml
rules:
  - name: block suspicious requests
    on: |
      header User-Agent glob(*bot*) |
      header User-Agent regex(.+crawler.+) |
      remote 192.168.1.0/24
    do: error 403 "Access denied"

  - name: rate limit uploads
    on: |
      method POST
      path glob(/upload/*)
    do: |
      set headers X-Rate-Limit 100
      proxy http://upload-server:8080

  - name: block malicious file extensions
    on: path regex("^/uploads/.*\.(exe|bat|sh)$")
    do: error 403 "File type not allowed"

  - name: allow only specific subdomains
    on: host glob(*.example.com) | host example.com
    do: pass

  - name: default
    do: proxy http://main-server:8080
```

### Advanced Pattern Matching

```yaml
rules:
  # Match API versions with regex
  - name: api v1 endpoints
    on: path regex("^/api/v1/")
    do: proxy http://api-v1:8080

  # Match subdomains with glob
  - name: tenant-specific routing
    on: host glob(*.tenant.example.com)
    do: proxy http://tenant-router:8080

  # Match specific header patterns
  - name: internal API calls
    on: |
      header X-Internal-Secret regex("^sk-[a-zA-Z0-9]{32}$")
      host glob(internal-*.example.com)
    do: proxy http://internal-api:8080

  # Match file types with regex
  - name: image processing
    on: path regex("^/uploads/.*\.(jpg|jpeg|png|gif|webp)$")
    do: proxy http://image-processor:8080

  # Match UUID patterns in path
  - name: user profile by UUID
    on: path regex("^/users/[a-f0-9-]{36}/profile$")
    do: proxy http://user-service:8080

  # Complex header matching
  - name: authenticated admin users
    on: |
      header X-User-Role admin
      header X-User-ID regex("^[0-9]+$")
      cookie session_id glob(sess_[a-zA-Z0-9]{24})
    do: |
      set headers X-Admin-Access true
      proxy http://admin-panel:8080
```

## Additional Practical Examples

### CORS Preflight and Simple CORS

```yaml
rules:
  # Respond to CORS preflight automatically
  - name: cors preflight
    on: |
      method OPTIONS
      header Origin
      header Access-Control-Request-Method
    do: |
      set headers Access-Control-Allow-Origin $header(Origin)
      set headers Access-Control-Allow-Methods GET,POST,PUT,PATCH,DELETE,OPTIONS
      set headers Access-Control-Allow-Headers $header(Access-Control-Request-Headers)
      set headers Access-Control-Allow-Credentials true
      error 204 ""

  # Allow simple CORS on actual requests
  - name: cors simple
    on: header Origin
    do: |
      set headers Access-Control-Allow-Origin $header(Origin)
      set headers Access-Control-Allow-Credentials true
      pass
```

### A/B Routing via Cookie

```yaml
rules:
  - name: experiment group B
    on: cookie exp_group B
    do: proxy http://backend-b:8080

  - name: experiment default (group A)
    do: proxy http://backend-a:8080
```

### Maintenance Window for Specific Paths

```yaml
rules:
  - name: maintenance api
    on: path glob(/api/**)
    do: error 503 "Service under maintenance"

  - name: default
    do: pass
```

### SPA Served Under Subpath With Fallback

```yaml
rules:
  - name: static assets under /app
    on: path glob(/app/static/**)
    do: serve /var/www/app/static

  - name: spa fallback under /app
    on: |
      method GET
      path glob(/app/**)
    do: |
      rewrite /app /app/index.html
      serve /var/www/app
```

### Mutating Headers, Query, and Cookies

```yaml
rules:
  - name: request mutations
    on: path glob(/api/**)
    do: |
      set headers X-Request-Id $header(X-Request-Id)
      add headers X-Forwarded-For $remote_host
      remove headers X-Secret
      add query debug true
      set cookies locale en-US
      proxy http://api-server:8080
```

### Response-Conditional Logging

```yaml
rules:
  - name: proxy and log json responses
    on: path glob(/api/**)
    do: |
      proxy http://api-server:8080
      # Runs after upstream response
      log info /dev/stdout "Status=$status_code CT=$resp_header(Content-Type)"
```

### Using Environment Variables

```yaml
rules:
  - name: route by env-configured upstream
    on: path glob(/service/**)
    do: proxy https://${SERVICE_HOST}:${SERVICE_PORT}

  - name: send redacted error with env variable
    on: path /secret
    do: error 403 "Forbidden: ${REDACT_REASON}"
```

### WebSocket Upgrade (Full Example)

```yaml
rules:
  - name: websocket upgrade
    on: |
      header Connection Upgrade
      header Upgrade websocket
    do: pass

  - name: default
    do: proxy http://ws-backend:8080
```

### Combining AND and OR Conditions

```yaml
rules:
  - name: admin tools access
    on: |
      path glob(/tools/**) & (header X-User-Role admin | cookie role admin)
    do: pass

  - name: default
    do: error 403 "Admins only"
```
