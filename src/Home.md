# Basic Setup

> [!NOTE]
>
> The wiki on `https://docs.godoxy.dev` reflects the latest changes in the repository.
>
> Open the wiki on your WebUI instance to read docs of the version you're running.

## Docker Image

| Tag             | Description                                       |
| --------------- | ------------------------------------------------- |
| `latest`        | Stable release                                    |
| `latest-compat` | Stable release (`godoxy` and `godoxy-agent` only) |
| `latest-lite`   | Stable release (lite, WebUI only)                 |
| `nightly`       | Experimental release                              |
| `nightly-lite`  | Experimental release (lite, WebUI only)           |
| `vx.y.z`        | Stable release                                    |

- Proxy `ghcr.io/yusing/godoxy:<tag>`
- Frontend `ghcr.io/yusing/godoxy-frontend:<tag>`
- Agent `ghcr.io/yusing/godoxy-agent:<tag>`

**Current version**

![GitHub Release](https://img.shields.io/github/v/release/yusing/godoxy?style=flat-square)

### Lite Image

Lite image is a smaller image that runs a static build of WebUI with nginx.

| Pros                | Cons                              |
| ------------------- | --------------------------------- |
| Smaller image size  | Slower compared to the full image |
| Uses less resources |                                   |

### Compat Image

Compat image is a compatible image for old CPUs / docker version, `godoxy` and `godoxy-agent` only.

If you see errors like these, you should use the `latest-compat` image:

- `SIGILL: illegal instruction`
- `Error response from daemon: client version 1.52 is too new. Maximum supported API version is 1.47`

## Secure your containers

> [!NOTE]
> GoDoxy will work without mapping ports to the host.

Remove `ports` section in your `docker-compose.yml` file.

Doing this will make your host has only **one** exposed service, which is GoDoxy.

## Environment variables

### Core

> [!NOTE]
> Also works with old prefix `GOPROXY_` or without prefix like `API_USER`

| Environment Variable    | Description                                                   | Default          | Values        |
| ----------------------- | ------------------------------------------------------------- | ---------------- | ------------- |
| `GODOXY_HTTP_ADDR`      | HTTP server listening address                                 | `:80`            | `[host]:port` |
| `GODOXY_HTTPS_ADDR`     | HTTPS server listening address (if enabled)                   | `:443`           | `[host]:port` |
| `GODOXY_API_ADDR`       | API server listening address                                  | `127.0.0.1:8888` | `[host]:port` |
| `GODOXY_LOCAL_API_ADDR` | Local API server listening address for unauthenticated access | -                | `[host]:port` |
| `GODOXY_HTTP3_ENABLED`  | Enable HTTP/3                                                 | `true`           | boolean       |
| `GODOXY_DEBUG`          | Enable debug behaviors and logging                            | `false`          | boolean       |

### Authentication

#### Common

| Environment Variable       | Description                      | Default                                                           | Values                                            |
| -------------------------- | -------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| `GODOXY_API_JWT_SECURE`    | Secure flag for JWT cookie       | `true`                                                            | boolean                                           |
| `GODOXY_API_JWT_SECRET`    | Base64 JWT secret for api server | random **(you will have to login again after restarting GoDoxy)** | string                                            |
| `GODOXY_API_JWT_TOKEN_TTL` | JWT Time-to-live                 | `24h`                                                             | [duration](https://pkg.go.dev/time#ParseDuration) |

> [!DANGER]
>
> If you desire to use WebUI without HTTPS, set `GODOXY_API_JWT_SECURE` to `false`
>
> **Not recommended**

#### User Password Auth

| Environment Variable  | Description          | Default    | Values |
| --------------------- | -------------------- | ---------- | ------ |
| `GODOXY_API_USER`     | WebUI login username | `admin`    | string |
| `GODOXY_API_PASSWORD` | WebUI login password | `password` | string |

#### OpenID Connect (OIDC)

OIDC provides enterprise authentication via external identity providers.

See [OIDC Configuration](OIDC.md) for setup instructions.

### Metrics

| Environment Variable             | Description                        | Default | Values  |
| -------------------------------- | ---------------------------------- | ------- | ------- |
| `GODOXY_METRICS_DISABLE_CPU`     | Disable cpu usage collection       | `false` | boolean |
| `GODOXY_METRICS_DISABLE_MEMORY`  | Disable memory usage collection    | `false` | boolean |
| `GODOXY_METRICS_DISABLE_DISK`    | Disable disk usage, I/O collection | `false` | boolean |
| `GODOXY_METRICS_DISABLE_NETWORK` | Disable network I/O collection     | `false` | boolean |
| `GODOXY_METRICS_DISABLE_SENSORS` | Disable sensors info collection    | `false` | boolean |

## Behaviors

**Default URL: `<container_name>.yourdomain.com`**

### Container Proxying

**ALL CONTAINERS** are proxied by default, **unless any of the following is true**:

- The label `proxy.exclude` is set to **true**
- The container is from a provider in **explicit only mode** (name with a trailing exclamation mark **`!`**)
- The container is a backend service (e.g.: headless browsers, databases, etc.)
- The container doesn't have any exposed port
- The container name starts with `buildx_`
- The alias starts with `x-` or ends with `-old`

### Explicitly Enable Container Proxying

- **GoDoxy < v0.9** - set label `proxy.aliases`
- **GoDoxy >= v0.9** - set any label starting with `proxy.`

### Health Monitoring

Health monitoring is enabled by default for **ALL CONTAINERS**, including the excluded ones.

It can be disabled by setting `healthcheck.disable: true` per route in the route file or in the docker labels.

```yaml
services:
  app:
    labels:
      proxy.app.healthcheck.disable: true
```

## Use JSON Schema in IDEs

**If you are unsure about what it is, ignore this**

Using JSON schema allows static checking in IDEs. For VSCode, copy [`.vscode/settings.example.json`](https://github.com/yusing/go-proxy/blob/main/.vscode/settings.example.json) to `.vscode/settings.json` (under root directory of GoDoxy) and modify it to fit your needs
