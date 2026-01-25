# Idle Sleep

Automatically sleep idle containers and wake them on traffic. Saves resources for infrequently used services.

## Overview

GoDoxy puts containers to sleep after a period of inactivity and wakes them automatically when traffic arrives. This feature is ideal for development environments, staging servers, or services with unpredictable usage patterns.

### Supported Platforms

- Docker
- Proxmox LXCs

### Supported Protocols

| Protocol | Description             |
| -------- | ----------------------- |
| HTTP     | Standard web traffic    |
| TCP      | Generic TCP connections |
| UDP      | Generic UDP connections |

## Quick Reference

| Property          | Description             | Default        | Required |
| ----------------- | ----------------------- | -------------- | -------- |
| `idle_timeout`    | Inactivity before sleep | Disabled       | Yes      |
| `wake_timeout`    | Wait time for wake      | `30s`          | No       |
| `stop_method`     | Container stop method   | `stop`         | No       |
| `stop_timeout`    | Stop command timeout    | `10s`          | No       |
| `stop_signal`     | Signal for stop/kill    | Docker default | No       |
| `start_endpoint`  | Wake trigger endpoint   | Any            | No       |
| `no_loading_page` | Disable wake page       | `false`        | No       |

## How It Works

### Sleep Behavior

1. Container receives no traffic for `idle_timeout` duration
2. GoDoxy executes `stop_method` on the container
3. Container dependencies are stopped in order
4. Traffic to the route triggers wake-up sequence

### Wake Behavior

1. Request arrives for sleeping route
2. Dependencies start first (if configured)
3. Main container starts
4. GoDoxy waits up to `wake_timeout` for readiness
5. Request is proxied to the now-active container

## Dependency Management

Containers with `depends_on` are managed as a group. This ensures related services start and stop together.

> [!WARNING]
>
> Do not set `idle_timeout` on dependency containers.

### Condition Types

Control when dependencies are considered ready:

| Condition         | Description                   |
| ----------------- | ----------------------------- |
| `service_started` | Dependency process started    |
| `service_healthy` | Dependency healthcheck passes |

### Docker Compose Example

```yaml
# Without conditions (implies service_started)
depends_on:
  - redis
  - postgres

# With explicit conditions
depends_on:
  redis:
    condition: service_healthy
  postgres:
    condition: service_started
```

### Label Syntax

```yaml
labels:
  proxy.depends_on: |
    - redis:service_healthy
    - postgres:service_started
```

## Docker Configuration

Enable idle sleep by adding labels to your container:

```yaml
services:
  app:
    image: nginx:latest
    container_name: my-app
    labels:
      # Required
      proxy.idle_timeout: 1h30s
      # Optional
      proxy.wake_timeout: 30s
      proxy.stop_method: stop
      proxy.stop_timeout: 10s
      proxy.stop_signal: SIGINT
      proxy.start_endpoint: /start
      proxy.no_loading_page: true
    depends_on:
      redis:
        condition: service_healthy
      postgres:
        condition: service_healthy

  redis:
    image: redis:alpine
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 10s
      timeout: 5s
      retries: 5

  postgres:
    image: postgres:16
    # Healthcheck configured via GoDoxy health monitoring
```

## Proxmox LXC Configuration

See [Proxmox Integration](Proxmox.md) for detailed configuration options.

## Property Reference

### Core Properties

| Property         | Description              | Default  | Accepted Values           |
| ---------------- | ------------------------ | -------- | ------------------------- |
| `idle_timeout`   | Inactivity before sleep  | Disabled | Duration (`1h30s`, `15m`) |
| `wake_timeout`   | Wait for wake completion | `30s`    | Duration                  |
| `start_endpoint` | Wake trigger path        | Any      | Relative URI              |

### Stop Control

| Property       | Description            | Default        | Accepted Values                                                         |
| -------------- | ---------------------- | -------------- | ----------------------------------------------------------------------- |
| `stop_method`  | Container stop action  | `stop`         | `stop`, `pause`, `kill`                                                 |
| `stop_timeout` | Stop command wait time | `10s`          | Duration                                                                |
| `stop_signal`  | Signal for stop/kill   | Docker default | `SIGINT`, `SIGTERM`, `SIGHUP`, `SIGQUIT` (with or without `SIG` prefix) |

### UI Options

| Property          | Description               | Default | Values  |
| ----------------- | ------------------------- | ------- | ------- |
| `no_loading_page` | Disable wake loading page | `false` | boolean |

### Duration Format

Use standard duration notation:

| Unit    | Description | Example    |
| ------- | ----------- | ---------- |
| `s`     | Seconds     | `30s`      |
| `m`     | Minutes     | `15m`      |
| `h`     | Hours       | `1h`       |
| `h m s` | Combined    | `1h30m15s` |

## Examples

### Development Environment

```yaml
services:
  dev-api:
    image: myapp/api:latest
    labels:
      proxy.idle_timeout: 30m
      proxy.wake_timeout: 60s
      proxy.stop_method: kill
      proxy.stop_timeout: 5s
    depends_on:
      dev-db:
        condition: service_healthy
  dev-db:
    image: postgres:16
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U postgres']
      interval: 5s
      timeout: 3s
```

### Staging with Specific Wake Endpoint

```yaml
services:
  staging-app:
    image: myapp/staging:latest
    labels:
      proxy.idle_timeout: 2h
      proxy.start_endpoint: /api/wake
      proxy.no_loading_page: false
```

## Best Practices

1. **Use healthchecks** with `service_healthy` condition for reliable dependencies
2. **Set appropriate timeouts** based on your service startup time
3. **Test wake behavior** before deploying to production
4. **Monitor container logs** during initial setup
5. **Use consistent stop signals** that match your application

## Related Documentation

- [Configuring Routes](Configuring-Routes.md) - Route setup guide
- [Health Monitoring](Health-monitoring.md) - Health check configuration
