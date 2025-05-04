# Health monitoring

## Behaviors

- Health monitoring is enabled by default for all proxied services
- If docker healthcheck is enabled, it will be used first. In this case, `use_get` and `path` will be ignored.
- In case docker healthcheck is not available (not enabled / failed to fetch), **GoDoxy** healthcheck will be used.

## Implementations

### HTTP healthcheck

GoDoxy uses `HEAD` or `GET` to send a request to the specified `path` (default to `/`).

**Healthy**: When server reply any HTTP response, except 503 SERVICE UNAVAILABLE

**Unhealthy**: Connection failure / Error, 503 SERVICE UNAVAILABLE

### TCP/UDP healthcheck

GoDoxy uses dials a TCP/UDP connection to upstream server.

**Healthy**: When connection is established

**Unhealthy**: Otherwise

### File server healthcheck

GoDoxy checks if the root directory exists and is accessible by GoDoxy with `os.Stat`.

**Healthy**: When root directory exists and is accessible

**Unhealthy**: Otherwise

## Properties

| Property | Description                                    | Default | Allowed Values / Syntax     |
| -------- | ---------------------------------------------- | ------- | --------------------------- |
| disable  | Disable health monitoring                      | false   | boolean                     |
| path     | Relative path **(HTTP only)**                  | empty   | empty or URI like `/health` |
| use_get  | Use GET method instead of HEAD **(HTTP only)** | false   | boolean                     |
| interval | Health check interval                          | 5s      | duration                    |
| timeout  | Health check timeout                           | 5s      | duration                    |

## Examples

### Docker compose

```yaml
services:
  qbittorrent:
    container_name: qbt
    image: nginx
    labels:
      proxy.qbt.healthcheck.use_get: true
    restart: unless-stopped
```

### Route file

```yaml
qbt:
  host: 10.0.0.1
  port: 8080
  healthcheck:
    use_get: true
```
