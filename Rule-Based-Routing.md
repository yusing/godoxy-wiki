# Rule based routing

> [!DANGER]
>
> Experimental, not fully tested.
>
> Everything, including syntax, may change until it is considered complete and stable.

## Fields

Rule has the following fields:

- `name` - rule name _(optional)_
- `on` - trigger condition _(required, except `name=default`)_
- `do` - actions _(required)_

## Behaviors

- When no rule matches, `default` rule (if defined) will be executed
- When no rule matches and `default` rule is not defined, request will be passed to reverse proxy
- When `do` is set to `pass`, request will be passed through to reverse proxy

## Syntax

Like in linux shell, values that contains spaces and quotes should be quoted or escaped, i.e.

```bash
header Some-Header "foo bar"     # foo bar
header Some-Header 'foo bar'     # foo bar
header Some-Header foo\ bar      # foo bar
header Some-Header 'foo \"bar\"' # foo "bar"
```

Supported escape sequences:

- `\n` - new line
- `\t` - tab
- `\r` - return
- `\\` - backslash
- `\"` - double quote
- `\'` - single quote
- `\ ` - space

### On

Conditions seperated by:

- `|` will be considered as **OR**
- lines will be considered as **AND**

```plain
<condition> <args> [ | <condition> <args>...]
```

Conditions:

| Condition  | Arguments                      | Description                                                                                                                                    |
| ---------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| header     | `<name> <value>`               | match when request header `<name>` equals `<value>`                                                                                            |
| header     | `<name>`                       | match on any request header `<name>`                                                                                                           |
| query      | `<name> <value>`               | match when query parameter `<name>` equals `<value>`                                                                                           |
| query      | `<name>`                       | match on any query parameter `<name>`                                                                                                          |
| cookie     | `<name> <value>`               | match when cookie `name` equals `<value>`                                                                                                      |
| cookie     | `<name>`                       | match on any cookie `<name>`                                                                                                                   |
| form       | `<name> <value>`               | match when form value `<name>` equals `<value>`                                                                                                |
| form       | `<name>`                       | match on any form value `<name>`                                                                                                               |
| postform   | `<name> <value>`               | match when form value `<name>` equals `<value>`                                                                                                |
| postform   | `<name>`                       | match on any form value `<name>`                                                                                                               |
| method     | `<method>`                     | match when request method equals `<method>`                                                                                                    |
| path       | `<path>`                       | match when request path matches glob `<path>`                                                                                                  |
| remote     | `<ip \| cidr>`                 | match when client IP matches `<ip>` or `<cidr>`                                                                                                |
| basic_auth | `<username> <hashed_password>` | match when request basic auth username equals `<username>` and password equals `<hashed_password>`, `<hashed_password>` is bcrypt hashed value |

### `postform` vs `form`

They both returns the first value for the named component of

- `postform` has the precedence order:

  1. `application/x-www-form-urlencoded` form body (`POST`, `PUT`, `PATCH` only)
  2. query parameters (always)
  3. `multipart/form-data` form body (always)

  - `form`: the `POST`, `PUT`, or `PATCH` request body

### Basic auth

`<hashed_password>` can be generated with `htpasswd -nbB '' some-password | cut -c 2-`

Example basic auth rule:

```yaml
services:
  app:
    container_name: app
    ...
    labels:
      proxy.app.rules: |
        - name: default
          do: require_basic_auth any
        - name: auth
          on: basic_auth user1 "$2y$0..." | basic_auth user2 "$2y$0..."
          do: pass
```

### on.path glob syntax

```help
Compile creates Glob for given pattern and strings (if any present after pattern) as separators.
The pattern syntax is:

   pattern:
       { term }

   term:
       `*`         matches any sequence of non-separator characters
       `**`        matches any sequence of characters
       `?`         matches any single non-separator character
       `[` [ `!` ] { character-range } `]`
                   character class (must be non-empty)
       `{` pattern-list `}`
                   pattern alternatives
       c           matches character c (c != `*`, `**`, `?`, `\`, `[`, `{`, `}`)
       `\` c       matches character c

   character-range:
       c           matches character c (c != `\\`, `-`, `]`)
       `\` c       matches character c
       lo `-` hi   matches character c for lo <= c <= hi

   pattern-list:
       pattern { `,` pattern }
                   comma-separated (without spaces) patterns
```

### Do

- Actions are executed in order
- Actions that returns afterwards must be the last action, e.g.:
  ```yaml
  # invalid
  on: method GET
  do: |
    serve /static/index.html
    serve /static/404.html
  # invalid
  on: method GET
  do: |
    redirect /foo/bar
    serve /static/index.html
  # valid
  on: method GET
  do: |
    rewrite / /index.html
    serve /static
  ```

Actions:

| Action             | Arguments               | Returns | Description                                               |
| ------------------ | ----------------------- | ------- | --------------------------------------------------------- |
| rewrite            | `<from> <to>`           | false   | rewrite request path from `<from>` to `<to>`              |
| serve              | `<path>`                | true    | serve static files / directory from `<path>`              |
| proxy              | `<target>`              | true    | proxy request to `<target>`                               |
| redirect           | `<url \| path>`         | true    | redirect request to absolute `<url>` or relative `<path>` |
| error              | `<status> <msg>`        | true    | respond with status code `<status>` and `<msg>`           |
| require_basic_auth | `<realm>`               | true    | require basic auth with realm `<realm>`                   |
| set                | `<field> <key> <value>` | false   | set `<field>` `<key>` to `<value>`                        |
| add                | `<field> <key> <value>` | false   | add `<value>` to `<field>` `<key>`                        |
| remove             | `<field> <key>`         | false   | remove `<key>` from `<field>`                             |
| pass               |                         | true    | pass request to reverse proxy                             |

#### Set/Add/Remove fields

- `headers`
- `query`
- `cookies`

## Examples

```yaml
# docker compose
services:
  app:
    container_name: goaccess
    ...
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

# Route file
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

# config.yml
# same as above, under `entrypoint` section
entrypoint:
  rules:
    ...
```
