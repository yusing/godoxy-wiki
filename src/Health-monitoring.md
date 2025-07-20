# Health monitoring

## Behaviors

- Health monitoring is enabled by default for all services, including the excluded ones.
- If docker healthcheck<sup style="font-weight: bold;">1</sup> is enabled, it will be used first. In this case, `use_get` and `path` will be ignored.
- In case docker healthcheck is not available (not enabled / failed to fetch), **GoDoxy** healthcheck will be used.
- You can disable health monitoring by setting `healthcheck.disable: true` in the route file<sup style="font-weight: bold;">2</sup> or in the docker labels<sup style="font-weight: bold;">3</sup>.

### References

1. Health check in [Docker compose](https://docs.docker.com/reference/compose-file/services/#healthcheck) and [Dockerfile](https://docs.docker.com/engine/reference/builder/#healthcheck), e.g.

   ```yaml
   healthcheck:
     test: ["CMD", "curl", "-f", "http://localhost"]
     interval: 1m30s
     timeout: 10s
     retries: 3
     start_period: 40s
     start_interval: 5s
   ```

2. Disable health monitoring in route file

   ```yaml
   app:
     host: 10.0.0.1
     port: 8080
     healthcheck:
       disable: true
   ```

3. Docker labels

   ```yaml
   services:
     app:
       labels:
         proxy.#1.healthcheck.disable: true
   ```

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

| Property | Description                                     | Default                   | Allowed Values / Syntax     |
| -------- | ----------------------------------------------- | ------------------------- | --------------------------- |
| disable  | Disable health monitoring                       | false                     | boolean                     |
| path     | Relative path **(HTTP only)**                   | empty                     | empty or URI like `/health` |
| use_get  | Use GET method instead of HEAD **(HTTP only)**  | false                     | boolean                     |
| interval | Health check interval                           | 5s                        | duration                    |
| timeout  | Health check timeout                            | 5s                        | duration                    |
| retries  | Health check retries before notifying unhealthy | 15s divided by `interval` | integer                     |

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
