# Load Balancing

Distribute traffic across multiple backend instances for high availability and scalability.

## Overview

Load balancing groups routes with the same `load_balance.link` value into a single load balancer. Requests are distributed according to the configured mode, with optional sticky sessions for session persistence.

> [!NOTE]
>
> Load balancing is currently supported for HTTP routes only. TCP/UDP load balancing is planned for future releases.

## Quick Reference

| Mode          | Description                        | Use Case               |
| ------------- | ---------------------------------- | ---------------------- |
| `round_robin` | Distribute requests evenly         | General purpose        |
| `least_conn`  | Route to fewest active connections | Long-lived connections |
| `ip_hash`     | Consistent routing by client IP    | Session persistence    |

## Property Reference

| Property         | Description                                                                   | Default       | Values                                 |
| ---------------- | ----------------------------------------------------------------------------- | ------------- | -------------------------------------- |
| `link`           | Load balancer group identifier                                                | Required      | string                                 |
| `mode`           | Distribution algorithm                                                        | `round_robin` | `round_robin`, `least_conn`, `ip_hash` |
| `sticky`         | Enable [Sticky session](https://traefik.io/glossary/what-are-sticky-sessions) | `false`       | boolean                                |
| `sticky_max_age` | Sticky session lifetime                                                       | `1h`          | duration                               |

## Load Balancing Modes

### Round Robin

Distributes requests evenly across all backends in sequence. Suitable for homogeneous backends with similar performance.

```yaml
load_balance:
  link: api
  mode: round_robin
```

### Least Connections

Routes new requests to the backend with the fewest active connections. Ideal for backends with varying response times or heterogeneous hardware.

```yaml
load_balance:
  link: api
  mode: least_conn
```

### IP Hash

Uses the client IP address to consistently route requests to the same backend. Useful when session data is stored locally on backends.

```yaml
load_balance:
  link: api
  mode: ip_hash
```

> [!TIP]
>
> For IP hash mode, ensure the [RealIP middleware](Middlewares.md#real-ip) is configured if GoDoxy operates behind a proxy.

## Sticky Sessions

Enable sticky sessions to route the same client to the same backend for the session duration.

```yaml
load_balance:
  link: api
  mode: round_robin
  sticky: true
  sticky_max_age: 2h
```

| Parameter        | Description                               |
| ---------------- | ----------------------------------------- |
| `sticky`         | Enable cookie-based session stickiness    |
| `sticky_max_age` | Session cookie lifetime (default: 1 hour) |

## Examples

### Docker Compose with Multiple Replicas

```yaml
services:
  whoami:
    image: traefik/whoami
    deploy:
      replicas: 10
    labels:
      proxy.*.load_balance: |
        link: whoami
        mode: round_robin
    ports:
      - '80'
    restart: unless-stopped
```

### Multi-Node Deployment

Configure the same `load_balance.link` across all nodes for distributed load balancing:

```yaml
services:
  whoami:
    image: traefik/whoami
    container_name: whoami
    labels:
      proxy.whoami.load_balance: |
        link: whoami
        mode: round_robin
        sticky: true
    ports:
      - '80'
    restart: unless-stopped
```

### Route File Configuration

```yaml
# config/loadbalancer.yml
whoami-1:
  host: 10.0.2.1
  port: 80
  load_balance:
    link: whoami
    mode: round_robin

whoami-2:
  host: 10.0.2.2
  port: 80
  load_balance:
    link: whoami
    mode: round_robin

whoami-3:
  host: 10.0.2.3
  port: 80
  load_balance:
    link: whoami
    mode: round_robin
```

## Best Practices

1. **Health Checks**: Ensure backends have health checks configured to remove unhealthy instances from rotation
2. **Homogeneous Backends**: Use round robin for backends with similar capacity
3. **Session Requirements**: Use ip_hash or sticky sessions only when necessary
4. **Sticky Age**: Set appropriate session lifetimes based on your application needs

## Related Documentation

- [Configuring Routes](Configuring-Routes.md) - Route setup guide
- [Health Monitoring](Health-monitoring.md) - Backend health checks
- [Middlewares](Middlewares.md) - Request processing middleware
