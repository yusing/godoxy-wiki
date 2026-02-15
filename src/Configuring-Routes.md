# Configuring Routes

Routes define how GoDoxy directs traffic to your applications. This guide covers all configuration methods, from Docker labels to route files.

## Quick Reference

| Method        | Use Case                  | Configuration Location      |
| ------------- | ------------------------- | --------------------------- |
| Docker Labels | Containerized apps        | `docker-compose.yml` labels |
| Route Files   | Non-Docker apps, VMs, LXC | `config/*.yml` files        |

## Docker Container Configuration

Configure routes for containerized applications using Docker labels.

### Basic Example

```yaml
services:
  app:
    image: nginx
    container_name: my-app
    labels:
      # Hostname aliases (FQDN or subdomain)
      proxy.aliases: app, app.domain.com
      # Target port (auto-detected if not specified)
      proxy.#1.port: 80
      # Inactivity timeout before sleep (disabled by default)
      proxy.idle_timeout: 1h
```

### Network Configuration

If your container uses multiple networks, specify which network GoDoxy should use:

```yaml
services:
  app:
    image: app
    labels:
      proxy.network: app-network
    networks:
      - app-network
      - app-network-2

networks:
  app-network:
  app-network-2:
```

### Health Check Configuration

Configure health checks to verify route availability:

```yaml
labels:
  # Path to check (applied to all aliases)
  proxy.*.healthcheck.path: /ping
  # Check interval
  proxy.*.healthcheck.interval: 10s
```

### Homepage Configuration

Customize how the route appears in the WebUI:

```yaml
labels:
  proxy.#1.homepage: |
    name: App Name
    icon: "@selfhst/app.svg"
    description: Application description
    category: app
  # Hide specific alias from homepage
  proxy.#2.homepage.show: false
```

## Route File Configuration

Route files configure routes for non-Docker applications (VMs, LXC containers, bare-metal).

### File Structure

Place route files in the `config/` directory with descriptive names:

```
config/
├── pve.yml        # Proxmox VE hosts
├── lxc.yml        # LXC containers
├── vps.yml        # Remote VPS instances
└── custom.yml     # Custom applications
```

### Include Route Files

Add route files to `providers.include` in your `config.yml`:

```yaml
providers:
  include:
    - config/pve.yml
    - config/lxc.yml
    - config/custom.yml
```

### Basic Route File

```yaml
# config/app.yml
app:
  host: 10.0.9.98
  port: 80
  homepage:
    name: Application
    icon: "@selfhst/app.svg"
    description: My application
    category: app

app-backend:
  host: 10.0.9.98
  port: 8080
  homepage:
    show: false
```

### File Server Route

Serve static files from a directory:

```yaml
blog:
  scheme: fileserver
  root: /app/blog/public
  spa: true
  index: index.html
```

### Remote Agent Routes

Route traffic through a remote GoDoxy agent:

```yaml
api.example.com:
  host: api.example.com
  scheme: https
  port: 443
  agent: https://10.0.1.2:8890
```

### Configuration Reuse with YAML Anchors

Use YAML anchors to share configuration across routes:

```yaml
x-proxy-common: &proxy-common
  scheme: https
  middlewares:
    hideXForwarded:
    modifyRequest:
      setHeaders:
        Host: $req_host

api.example.com:
  <<: *proxy-common
  host: api.example.com

admin.example.com:
  <<: *proxy-common
  host: admin.example.com
```

## Label Syntax Reference

### Full Namespace Syntax (Traefik-style)

```yaml
services:
  app:
    labels:
      proxy.app.middlewares.request.set_headers.X-Custom-Header: value1,value2
```

### Inline YAML Syntax

```yaml
services:
  app:
    labels:
      proxy.app.middlewares.request.set_headers: |
        - X-Custom-Header: value1
        - X-Custom-Header2: value2
```

### Index-Based Alias Configuration

Configure specific aliases by their position:

```yaml
labels:
  proxy.aliases: app.domain.com, app-backend.domain.com
  # #1 points to first alias (app.domain.com)
  proxy.#1.port: 80
  # #2 points to second alias (app-backend.domain.com)
  proxy.#2.port: 8080
```

## Property Reference

### Core Proxy Properties

| Property        | Description              | Default                                                     | Values                                      |
| --------------- | ------------------------ | ----------------------------------------------------------- | ------------------------------------------- |
| `scheme`        | Route protocol           | Auto-detected                                               | `http`, `https`, `tcp`, `udp`, `fileserver` |
| `host`          | Target hostname/IP       | Docker: client IP<br>File: `localhost`                      | IP or hostname                              |
| `port`          | Listening and proxy port | `80:proxy_port`+`443:proxy_port` (proxy port auto-detected) | `1-65535` or `1-65535:1-65535`              |
| `agent`         | Upstream agent           | None                                                        | Agent name or URL                           |
| `no_tls_verify` | Skip TLS verification    | `false`                                                     | `true`, `false`                             |

### Stream Properties (TCP/UDP)

| Property | Description              | Default                                 | Values           |
| -------- | ------------------------ | --------------------------------------- | ---------------- |
| `port`   | Listening and proxy port | `0:lowest_port` (random listening port) | `from:to` format |
| `bind`   | Bind address             | `0.0.0.0`                               | IP address       |

### HTTP-Specific Properties

| Property                  | Description                 | Default       | Values              |
| ------------------------- | --------------------------- | ------------- | ------------------- |
| `bind`                    | Bind to specific IP address | `0.0.0.0`     | IP address          |
| `no_tls_verify`           | Skip TLS verification       | `false`       | boolean             |
| `response_header_timeout` | Response header timeout     | `60s`         | duration            |
| `disable_compression`     | Disable gzip compression    | `false`       | boolean             |
| `ssl_server_name`         | SNI server name             | Auto          | string              |
| `ssl_trusted_certificate` | CA certificate path         | None          | file path           |
| `ssl_certificate`         | Client certificate path     | None          | file path           |
| `ssl_certificate_key`     | Client key path             | None          | file path           |
| `ssl_protocols`           | Allowed TLS versions        | All supported | `TLSv1.0`–`TLSv1.3` |

### File Server Properties

| Property | Description                     | Default       | Values         |
| -------- | ------------------------------- | ------------- | -------------- |
| `root`   | Document root directory         | Required      | directory path |
| `spa`    | Single-page application mode    | `false`       | boolean        |
| `index`  | Default index file for SPA mode | `/index.html` | filename       |

### Sleep & Wake Properties

| Property          | Description               | Default        | Values                   |
| ----------------- | ------------------------- | -------------- | ------------------------ |
| `idle_timeout`    | Inactivity before sleep   | Disabled       | duration (e.g., `1h30s`) |
| `wake_timeout`    | Wait time for wake        | `30s`          | duration                 |
| `stop_method`     | Stop method after idle    | `stop`         | `stop`, `pause`, `kill`  |
| `stop_timeout`    | Timeout for stop command  | `10s`          | duration                 |
| `stop_signal`     | Signal for stop/kill      | Docker default | Signal name              |
| `start_endpoint`  | Required wake endpoint    | Any            | relative path            |
| `no_loading_page` | Disable wake loading page | `false`        | boolean                  |

### Label-Only Properties

| Property  | Description        | Default          | Values          |
| --------- | ------------------ | ---------------- | --------------- |
| `aliases` | Route hostnames    | `container_name` | comma-separated |
| `exclude` | Exclude from proxy | `false`          | boolean         |
| `network` | Docker network     | First available  | network name    |

## Docker Troubleshooting

### Containers Not Appearing

Ensure containers expose their ports:

```yaml
services:
  nginx:
    expose:
      - "80"
```

### Common Issues

1. **Port not detected**: Verify `expose` or `ports` are defined
2. **Wrong network**: Specify `proxy.network` if using multiple networks
3. **Alias not working**: Ensure FQDN matches DNS records

## Related Documentation

- [Middlewares](Middlewares.md) - Request/response processing
- [Rule-Based Routing](Rule-Based-Routing.md) - Conditional routing
- [Health Monitoring](Health-monitoring.md) - Route health checks
- [Access Control](Access-Control.md) - Logging and access rules
