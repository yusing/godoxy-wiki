# Access Control

## Connection Level

Connection level access control handles IP addresses before the request is even processed. If an IP is blocked, the connection will be dropped (and logged if configured).

### Supported Filters

| Type             | Example            | MaxMind Credentials Required |
| ---------------- | ------------------ | ---------------------------- |
| IP address       | `ip:1.2.3.4`       | No                           |
| CIDR             | `cidr:1.2.3.4/32`  | No                           |
| ISO country code | `country:US`       | **Yes**                      |
| Timezone         | `tz:Asia/Shanghai` | **Yes**                      |

### ACL Configuration

| Key           | Type        | Description                          | Required | Default |
| ------------- | ----------- | ------------------------------------ | -------- | ------- |
| `default`     | string      | Default action                       | **Yes**  | `allow` |
| `allow_local` | bool        | Allow local addresses                | No       | `true`  |
| `allow`       | Filter List | Allow list                           | No       | `[]`    |
| `deny`        | Filter List | Deny list                            | No       | `[]`    |
| `log`         | object      | [Log configuration](#access-logging) | No       | `{}`    |

### ACL Example

```yaml
# config.yml
acl:
  default: allow # or deny (default: allow)
  allow_local: true # or false (default: true)
  allow:
    - ip:1.2.3.4
    - cidr:1.2.3.4/32
    - country:US
    - tz:Asia/Shanghai
  deny:
    - ip:1.2.3.4
    - cidr:1.2.3.4/32
    - country:US
    - tz:Asia/Shanghai
  log:
    buffer_size: 65536 # (default: 64KB)
    path: /app/logs/acl.log # (default: none)
    stdout: false # (default: false)
    keep: last 10 # (default: none)
    log_allowed: true # (default: false)
providers:
  maxmind:
    account_id: 123456
    license_key: your-license-key
    database: geolite # or geoip2 if you have subscription
```

## Request Level

Request level access control handles IP addresses after the request is processed. If an IP is blocked, GoProxy will respond with an HTTP error code with an error message (and logged if configured).

> [!NOTE]
> HTTP Access loggers can be configured
>
> - in `config.yml` under entrypoint section
> - per route in docker labels or route files

### Request Whitelist Configuration

| Key           | Type         | Description   | Required | Default          |
| ------------- | ------------ | ------------- | -------- | ---------------- |
| `allow`       | IP/CIDR list | Allow list    | No       | `[]`             |
| `status_code` | int          | Status code   | No       | `403`            |
| `message`     | string       | Error message | No       | `IP not allowed` |

### Request Whitelist Example

```yaml
# config.yml
entrypoint:
  middlewares: # allow only local (private) ips
    - use: CIDRWhiteList
      allow:
        - 127.0.0.1/32
        - 172.16.0.0/12
        - 192.168.0.0/16
        - 10.0.0.0/8
      status_code: 403
      message: Forbidden
  access_log:
    format: json
    path: /app/logs/access.json.log
    filters: # skip logging requests from local (private) ips
      cidr:
        negative: true
        values:
          - 127.0.0.1/32
          - 172.16.0.0/12
          - 192.168.0.0/16
          - 10.0.0.0/8
    fields:
      headers:
        default: drop # drop app headers in log
        config: # keep only these
          X-Real-Ip: keep
          CF-Connecting-Ip: keep
          X-Forwarded-For: keep

# docker labels
proxy.#1.middlewares.cidr_whitelist: |
  allow:
    - 10.0.0.0/8
    - 192.168.0.0/16
  status_code: 403
  message: "IP not allowed"
```

## Access Logging

### Common Fields

| Key                   | Type                       | Description                                       | Allowed Values        | Default      |
| --------------------- | -------------------------- | ------------------------------------------------- | --------------------- | ------------ |
| `path`                | string                     | Path to the access log file                       | `/var/log/access.log` | **required** |
| `stdout`              | bool                       | Enable stdout logging **(can be used with path)** | `true` or `false`     | `false`      |
| `keep` or `retention` | [See below](#log-rotation) | Retention policy                                  |                       | `30 days`    |
| `rotate_interval`     | duration                   | Log rotation interval                             | Duration              | `1h`         |

### Log rotation

> [!NOTE]
>
> To enable log rotation, you may set `keep` or `retention` to a retention policy.
>
> **Default**: `30 days`

Format:

- `{N} days|weeks|months` _(e.g. `30 days`)_
- `{N} KB|MB|GB|kb|mb|gb` _(e.g. `100 MB` for 100 Megabytes, `100 mb` for 100 Megabits)_
- `last {N}` _(e.g. `last 10` for last 10 lines)_

### HTTP Access Log

| Field                         | Type                                            | Description                     | Allowed values                      | Default                         |
| ----------------------------- | ----------------------------------------------- | ------------------------------- | ----------------------------------- | ------------------------------- |
| `format`                      | string                                          | access log format               | `common`, `combined`, `json`        | `combined`                      |
| `filters`                     | object                                          | access log filters _(optional)_ |                                     |                                 |
| `filters.*.negative`          | bool                                            | negative filters                | `true` or `false`                   | `false`                         |
| `filters.status_codes.values` | integer or integer range                        | status code filters             |                                     |                                 |
| `filters.method.values`       | string                                          | method filters                  | `GET`, `POST`, ...                  |                                 |
| `filters.host.values`         | string                                          | host filters                    | hostname                            |                                 |
| `filters.headers.values`      | string                                          | headers filters                 | case-sensitive `key` or `key=value` |                                 |
| `filters.cidr.values`         | string                                          | CIDR filters                    | see below                           |                                 |
| `fields`                      | object                                          | access log fields               | see below                           |                                 |
| `fields.*.default`            | string (field mode)                             | default field behavior          | `keep`, `drop`, `redact`            | See [Explanation](#explanation) |
| `fields.*.config`             | `key:value` mapping **(key is case-sensitive)** | headers fields                  | `key: field_mode`                   |                                 |
| `fields.headers.config.*`     | string                                          | headers fields                  | `header: field_mode`                |                                 |
| `fields.query.config.*`       | string                                          | query fields                    | `query: field_mode`                 |                                 |
| `fields.cookies.config.*`     | string                                          | cookies fields                  | `cookie: field_mode`                |                                 |

#### Explanation

- Multiple access loggers can share the same log file
- When `filters.*.negative` is set to `true`, requests that match any of the negative filters will not be logged
- When `fields.*.default` is set to `keep`, that field will be logged
- When `fields.*.default` is set to `redact`, that field will be redacted as `REDACTED`
  - `fields.query.default` = `redact` will replace the query string with a format like `?key=REDACTED`
  - This redaction configuration for other fields (besides query) only takes effect when `access_log.format` is set to `json`
- When `fields.*.default` is set to `drop`, that field will be dropped
- Default field config:
  - `query.default` = `keep`
  - `cookies.default` = `drop`
  - `headers.default` = `drop`

### ACL Log

| Field         | Type | Description            | Required | Allowed values    | Default |
| ------------- | ---- | ---------------------- | -------- | ----------------- | ------- |
| `log_allowed` | bool | log when IP is allowed | bool     | `true` or `false` | `false` |

## Full Example

```yaml
# config.yml
entrypoint:
  access_log:
    format: json
    path: /var/log/example.log
    filters:
      status_codes:
        values:
          - 200-299
          - 101
      method:
        values:
          - GET
      host:
        values:
          - example.y.z
      headers:
        negative: true
        values:
          - foo=bar # when key "foo" is present and value is `bar`
          - baz # when key "baz" is present
      cidr:
        values:
          - 192.168.10.0/24
    fields:
      headers:
        default: keep
        config:
          foo: redact
      query:
        default: drop
        config:
          foo: keep
      cookies:
        default: redact
        config:
          foo: keep

# route file
# same as above, but under your app config, e.g.
app1:
  access_log:
    format: json
    ...

# docker labels - string as inline mapping
proxy.app1.access_log: |
  format: json
  ...

# docker labels - full label
proxy.app1.access_log.format: json
proxy.app1.access_log.filters.status_codes.values: 200-299,300
proxy.app1.access_log.fields.headers.config.foo: redact
```
