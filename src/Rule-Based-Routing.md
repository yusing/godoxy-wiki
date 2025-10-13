# Rule-Based Routing

> [!DANGER] > **Experimental Feature**
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

```bash
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
| `$$`     | Dollar sign (literal)    | String values, regex patterns |
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

| Condition    | Arguments                      | Description                                | Example                                                                            |
| ------------ | ------------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| `header`     | `<name> <pattern>`             | Match when request header matches pattern  | `header Content-Type application/json`, `header X-API-Key regex("^sk-.*")`         |
| `header`     | `<name>`                       | Match when header exists (any value)       | `header X-API-Key`                                                                 |
| `query`      | `<name> <pattern>`             | Match when query parameter matches pattern | `query debug true`, `query id regex("^[a-f0-9-]{36}$")`                            |
| `query`      | `<name>`                       | Match when query parameter exists          | `query debug`                                                                      |
| `cookie`     | `<name> <pattern>`             | Match when cookie matches pattern          | `cookie session_id abc123`, `cookie token glob("sess_*")`                          |
| `cookie`     | `<name>`                       | Match when cookie exists                   | `cookie session_id`                                                                |
| `form`       | `<name> <pattern>`             | Match when form field matches pattern      | `form action submit`, `form email regex("^[^@]+@[^@]+$")`                          |
| `form`       | `<name>`                       | Match when form field exists               | `form action`                                                                      |
| `postform`   | `<name> <pattern>`             | Match when POST form field matches pattern | `postform action submit`, `postform file glob("*.pdf")`                            |
| `postform`   | `<name>`                       | Match when POST form field exists          | `postform action`                                                                  |
| `method`     | `<method>`                     | Match when HTTP method equals value        | `method POST`                                                                      |
| `host`       | `<pattern>`                    | Match when host matches pattern            | `host example.com`, `host glob(*.example.com)`, `host regex("^[a-z]+-prod\.com$")` |
| `path`       | `<pattern>`                    | Match when path matches pattern            | `path /api/*`, `path regex("^/api/v[0-9]+/.*)`                                     |
| `remote`     | `<ip \| cidr>`                 | Match when client IP matches CIDR range    | `remote 192.168.1.0/24`                                                            |
| `route`      | `<pattern>`                    | Match when route name matches pattern      | `route api`, `route glob(api-*)`                                                   |
| `basic_auth` | `<username> <hashed_password>` | Match when basic auth credentials match    | `basic_auth admin $2y$10$...`                                                      |

### Form Field Conditions

Both `form` and `postform` conditions match form field values, but they have different precedence orders:

#### `postform` Precedence Order

1. `application/x-www-form-urlencoded` form body (POST, PUT, PATCH only)
2. Query parameters (always)
3. `multipart/form-data` form body (always)

#### `form` Precedence Order

- Only matches the POST, PUT, or PATCH request body

#### Example

```bash
# For a POST request with query param ?action=query and form body action=form
postform action query    # Matches "query" (query param takes precedence)
form action form         # Matches "form" (only form body)
```

### Basic Authentication

For `basic_auth` conditions, the password must be bcrypt hashed. Generate the hash using:

```bash
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

```yaml
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

```yaml
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

```yaml
path regex("^/api/v[0-9]+/users/[a-f0-9-]{36}$")  # Match specific UUID pattern
path regex("^/files/[0-9]{4}-[0-9]{2}-[0-9]{2}$")  # Match date pattern
```

#### Examples

```yaml
# String matching
path /api/users                    # Exact match

# Glob patterns
path /api/*                       # Matches /api/users, /api/posts, etc.
path /static/**                   # Matches /static/css/style.css, /static/js/app.js
path /file?.txt                   # Matches /file1.txt, /fileA.txt
path /admin/{users,posts}         # Matches /admin/users or /admin/posts

# Regex patterns
path regex("^/api/v[0-9]+/.+")    # Matches any API v1+ path
path regex("^/uploads/.*\.(jpg|png)$")  # Matches image uploads
```

## Actions (`do`)

The `do` field defines the actions to execute when rule conditions are met.

### Action Execution Rules

- **Order**: Actions are executed in the order they are defined
- **Terminating Actions**: Actions that return a response must be the last action in the sequence
- **Non-terminating Actions**: Actions that don't return a response can be followed by other actions

#### Valid Action Sequences

```yaml
# ✅ Valid: Non-terminating actions followed by terminating action
on: method GET
do: |
  rewrite / /index.html
  serve /static

# ❌ Invalid: Terminating action followed by another action
on: method GET
do: |
  serve /static/index.html
  serve /static/404.html

# ❌ Invalid: Terminating action followed by another action
on: method GET
do: |
  redirect /foo/bar
  serve /static/index.html
```

### Available Actions

| Action               | Arguments               | Returns | Description                                              | Example                      |
| -------------------- | ----------------------- | ------- | -------------------------------------------------------- | ---------------------------- |
| `rewrite`            | `<from> <to>`           | false   | Rewrite request path                                     | `rewrite /api /backend`      |
| `serve`              | `<path>`                | true    | Serve static files/directory                             | `serve /static`              |
| `proxy`              | `<target>`              | true    | Proxy request to target                                  | `proxy http://backend:8080`  |
| `redirect`           | `<url \| path>`         | true    | Redirect to URL or path                                  | `redirect /login`            |
| `error`              | `<status> <msg>`        | true    | Return error response                                    | `error 403 "Forbidden"`      |
| `require_basic_auth` | `<realm>`               | true    | Set `WWW-Authenticate` header and return 401 status code | `require_basic_auth "Admin"` |
| `set`                | `<field> <key> <value>` | false   | Set field value                                          | `set headers X-Custom value` |
| `add`                | `<field> <key> <value>` | false   | Add value to field                                       | `add headers X-Custom value` |
| `remove`             | `<field> <key>`         | false   | Remove field key                                         | `remove headers X-Custom`    |
| `pass`               |                         | true    | Pass to reverse proxy                                    | `pass`                       |

### Field Modifications

The `set`, `add`, and `remove` actions can modify these fields:

- **`headers`** - HTTP headers
- **`query`** - Query parameters
- **`cookies`** - HTTP cookies

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

### Static Site with SPA Fallback

```yaml
rules:
  - name: static assets
    on: path /static/*
    do: serve /var/www/static

  - name: api requests
    on: path /api/*
    do: proxy http://backend:3000

  - name: spa fallback
    on: method GET
    do: |
      rewrite / /index.html
      serve /var/www
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
