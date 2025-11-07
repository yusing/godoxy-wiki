# Concept

Routes with same `load_balance.link` are grouped in the same load-balancer.

Support HTTP routes only. Will plan for TCP/UDP load-balancing in the future if needed.

## Properties

| Property         | Description                    | Default       | Allowed Values / Syntax                                                |
| ---------------- | ------------------------------ | ------------- | ---------------------------------------------------------------------- |
| `link`           | Subdomain of load-balancer     | N/A           | string                                                                 |
| `mode`           | Load-balance mode              | `round_robin` | <ul><li>`round_robin`</li><li>`least_conn`</li><li>`ip_hash`</li></ul> |
| `sticky`         | Enable sticky sessions         | `false`       | boolean                                                                |
| `sticky_max_age` | Maximum age of sticky sessions | `1h`          | Duration                                                               |
| `options`        | Mode specific options          | N/A           | N/A                                                                    |

### IP Hash Mode Options

See [RealIP middleware](Middlewares#real-ip)

## Examples

### Docker compose

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
      - 80
    restart: unless-stopped
```

### Multi-nodes

Set the same `load_balance.link` across all nodes

```yaml
services:
  whoami:
    image: traefik/whoami
    container_name: whoami
    labels:
      proxy.whoami.load_balance: |
        link: whoami
        mode: round_robin
    ports:
      - 80
    restart: unless-stopped
```

### Route file

```yaml
whoami-1:
  host: 10.0.2.1
  load_balance:
    link: whoami
    mode: round_robin
whoami-2:
  host: 10.0.2.2
  load_balance:
    link: whoami
whoami-3:
  host: 10.0.2.3
  load_balance:
    link: whoami
```
