# Multi Docker Nodes Setup

## Using `godoxy-agent` (recommended)

### Docker agent

1. Create a directory for agent server, `cd` into it
2. Navigate to **Servers tab** in Web UI, click **Add agent**, fill in required information then click **Copy docker compose**
3. Paste the docker compose into a file (e.g., `compose.yml`) on the agent server then start it with `docker compose up -d`

### System agent

1. Navigate to **Servers tab** in Web UI, click **Add agent**, select **System** as agent type, fill in required information then click **Copy shell command**
2. Run the shell command on the agent server

To update the agent, run the following command on the agent server, or make it a cron job:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/yusing/godoxy/refs/heads/main/scripts/install-agent.sh)" -- update
```

### Why?

- `godoxy-agent` is a light-weight agent that handles
  - Reverse proxy (http, h2c and https routes)
  - Port forwarding (tcp and udp routes)
  - Docker API
  - System metrics (CPU, memory, disk, network)
  - Health checks
- Secure by default, with [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/) (for HTTP, TCP) and [DTLS](https://developer.mozilla.org/en-US/docs/Glossary/DTLS)+[mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/) (for UDP)

## Using `docker-socket-proxy`

> [!WARNING]
>
> **Not recommended**
>
> This exposes docker socket and maintain unencrypted connection

run the following docker compose file on the other node:

```yaml
docker-proxy:
  container_name: docker-proxy
  image: lscr.io/linuxserver/socket-proxy:latest
  environment:
    - ALLOW_START=1
    - ALLOW_STOP=1
    - ALLOW_RESTARTS=1
    - CONTAINERS=1
    - EVENTS=1
    - INFO=1
    - PING=1
    - POST=1
    - VERSION=1
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  restart: always
  tmpfs:
    - /run
  ports:
    - <ip>:2375:2375
```

Add this to your `config.yml` under `providers.docker`:

```yaml
providers:
  docker:
    local: ${DOCKER_HOST}
    server-1: tcp://<ip>:2375 # add it here
```
