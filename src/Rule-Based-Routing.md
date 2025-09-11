# Rule-Based Routing

> [!DANGER]
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

```bash
header Some-Header "foo bar"     # Double quotes
header Some-Header 'foo bar'     # Single quotes  
header Some-Header foo\ bar      # Escaped space
header Some-Header 'foo \"bar\"' # Escaped quotes inside single quotes
```

### Supported Escape Sequences

| Sequence | Description     |
| -------- | --------------- |
| `\n`     | New line        |
| `\t`     | Tab             |
| `\r`     | Carriage return |
| `\\`     | Backslash       |
| `\"`     | Double quote    |
| `\'`     | Single quote    |
| `\`      | Space           |

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

| Condition    | Arguments                      | Description                             | Example                                |
| ------------ | ------------------------------ | --------------------------------------- | -------------------------------------- |
| `header`     | `<name> <value>`               | Match when request header equals value  | `header Content-Type application/json` |
| `header`     | `<name>`                       | Match when header exists (any value)    | `header X-API-Key`                     |
| `query`      | `<name> <value>`               | Match when query parameter equals value | `query debug true`                     |
| `query`      | `<name>`                       | Match when query parameter exists       | `query debug`                          |
| `cookie`     | `<name> <value>`               | Match when cookie equals value          | `cookie session_id abc123`             |
| `cookie`     | `<name>`                       | Match when cookie exists                | `cookie session_id`                    |
| `form`       | `<name> <value>`               | Match when form field equals value      | `form action submit`                   |
| `form`       | `<name>`                       | Match when form field exists            | `form action`                          |
| `postform`   | `<name> <value>`               | Match when POST form field equals value | `postform action submit`               |
| `postform`   | `<name>`                       | Match when POST form field exists       | `postform action`                      |
| `method`     | `<method>`                     | Match when HTTP method equals value     | `method POST`                          |
| `path`       | `<path>`                       | Match when path matches glob pattern    | `path /api/*`                          |
| `remote`     | `<ip \| cidr>`                 | Match when client IP matches            | `remote 192.168.1.0/24`                |
| `route`      | `<name>`                       | Match when route name equals value      | `route api`                            |
| `basic_auth` | `<username> <hashed_password>` | Match when basic auth credentials match | `basic_auth admin $2y$10$...`          |

### Form Field Conditions

Both `form` and `postform` conditions match form field values, but they have different precedence orders:

#### `postform` Precedence Order

1. `application/x-www-form-urlencoded` form body (POST, PUT, PATCH only)
2. Query parameters (always)
3. `multipart/form-data` form body (always)

#### `form` Precedence Order

- Only matches the POST, PUT, or PATCH request body

#### Example

```yaml
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

### Path Glob Syntax

The `path` condition uses glob patterns for matching request paths:

| Pattern   | Description                                       | Example              | Matches                                      |
| --------- | ------------------------------------------------- | -------------------- | -------------------------------------------- |
| `*`       | Any sequence of non-separator characters          | `/api/*`             | `/api/users`, `/api/posts`                   |
| `**`      | Any sequence of characters (including separators) | `/static/**`         | `/static/css/style.css`, `/static/js/app.js` |
| `?`       | Any single non-separator character                | `/file?.txt`         | `/file1.txt`, `/fileA.txt`                   |
| `[abc]`   | Character class                                   | `/file[123].txt`     | `/file1.txt`, `/file2.txt`, `/file3.txt`     |
| `[!abc]`  | Negated character class                           | `/file[!123].txt`    | `/fileA.txt`, `/fileB.txt`                   |
| `{a,b,c}` | Pattern alternatives                              | `/api/{users,posts}` | `/api/users`, `/api/posts`                   |

#### Examples

```yaml
path /api/*           # Matches /api/users, /api/posts, etc.
path /static/**       # Matches /static/css/style.css, /static/js/app.js
path /file?.txt       # Matches /file1.txt, /fileA.txt
path /admin/{users,posts}  # Matches /admin/users or /admin/posts
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

| Action               | Arguments               | Returns | Description                  | Example                      |
| -------------------- | ----------------------- | ------- | ---------------------------- | ---------------------------- |
| `rewrite`            | `<from> <to>`           | false   | Rewrite request path         | `rewrite /api /backend`      |
| `serve`              | `<path>`                | true    | Serve static files/directory | `serve /static`              |
| `proxy`              | `<target>`              | true    | Proxy request to target      | `proxy http://backend:8080`  |
| `redirect`           | `<url \| path>`         | true    | Redirect to URL or path      | `redirect /login`            |
| `error`              | `<status> <msg>`        | true    | Return error response        | `error 403 "Forbidden"`      |
| `require_basic_auth` | `<realm>`               | true    | Set `WWW-Authenticate` header and return 401 status code | `require_basic_auth "Admin"` |
| `set`                | `<field> <key> <value>` | false   | Set field value              | `set headers X-Custom value` |
| `add`                | `<field> <key> <value>` | false   | Add value to field           | `add headers X-Custom value` |
| `remove`             | `<field> <key>`         | false   | Remove field key             | `remove headers X-Custom`    |
| `pass`               |                         | true    | Pass to reverse proxy        | `pass`                       |

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
        - name: block POST and PUT requests
          on: method POST | method PUT
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
    on: path /api/public/*
    do: proxy http://api-server:8080
  
  - name: admin with specific credentials
    on: |
      path /api/admin/*
      basic_auth admin $2y$10$hashed_password
    do: |
      set headers X-Admin true
      proxy http://admin-server:8080
  
  - name: protected endpoints with auth
    on: |
      path /api/protected/*
      basic_auth user1 $2y$10$hashed_password1 | 
      basic_auth user2 $2y$10$hashed_password2
    do: proxy http://api-server:8080
  
  - name: require auth for protected
    on: path /api/protected/*
    do: |
      require_basic_auth "API Access"

  - name: require auth for admin
    on: path /api/admin/*
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
      header User-Agent "bot" | 
      header User-Agent "crawler" |
      remote 192.168.1.0/24
    do: error 403 "Access denied"
  
  - name: rate limit uploads
    on: |
      method POST
      path /upload/*
    do: |
      set headers X-Rate-Limit 100
      proxy http://upload-server:8080
  
  - name: default
    do: proxy http://main-server:8080
```
