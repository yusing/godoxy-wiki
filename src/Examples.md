# Example

> [!NOTE]
>
> `proxy.aliases` is the `container_name` by default.

## Multiple-port apps

```yaml
services:
  app:
    ...
    labels:
      proxy.aliases: app, app-backend
      proxy.#1.port: 8080
      proxy.#2.port: 8081
```

## TCP Forwarding

```yaml
services:
  app:
    ...
    labels:
      proxy.#1.scheme: tcp
      proxy.#1.port: 2222:22 # forward container port 22 to host
```

## Idle-sleep

```yaml
services:
  app:
    ...
    labels:
      proxy.idle_timeout: 1h30s
```
