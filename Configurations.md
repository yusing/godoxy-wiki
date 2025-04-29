# Configurations

## Basic Config File

Here's a simple example of a configuration file:

```yaml
providers:
  docker:
    local: $DOCKER_HOST
```

### Understanding the Config File

The `config.yml` file is divided into several sections:

- **acl**: Handles access control
- **autocert**: Handles SSL certificate settings
- **entrypoint**: Manages GoDoxy entrypoints (port 80 and 443)
  - **middlewares**: Defines middleware settings
  - **access_log**: Configures access logs
- **providers**: Sets up orchestrators This is **required**
  - **include**: Includes route configuration files
  - **docker**: Configures Docker providers
  - **agents**: GoDoxy agents
  - **proxmox**: Proxmox credentials
  - **notification**: Configures notifications for health monitoring
- **match_domains**: List of domains to match
- **homepage**: Configures homepage settings

### SSL Certificate (autocert)

For SSL certificates, you can either use an existing one or set up automatic certificates.

#### Using an Existing SSL Certificate

```yaml
autocert:
  provider: local
  # path relative to /app
  cert_path: certs/cert.crt
  key_path: certs/priv.key
```

#### Auto SSL with Cloudflare

```yaml
autocert:
  provider: cloudflare
  email: your-email@example.com
  domains:
    - "*.yourdomain.com"
  options:
    auth_token: your-zone-api-token
```

![Cloudflare autocert](images/config/cf-autocert.png)

#### Auto SSL with other DNS providers

Check [Supported-DNS‐01-Providers](Supported-DNS‐01-Providers)

#### Troubleshooting SSL Issues

If you encounter issues, try these steps:

- Set `LEGO_DISABLE_CNAME_SUPPORT=1` if your domain has a CNAME record.
- Use a different DNS server.

  ```yaml
  services:
    app:
      container_name: godoxy
      ...
      environment:
        - LEGO_DISABLE_CNAME_SUPPORT=1
      dns:
        - 1.1.1.1
        - 1.1.1.2
  ```

### Entrypoint Configuration

This section defines how GoDoxy handles incoming requests.

```yaml
entrypoint:
  middlewares:
    - use: CIDRWhitelist
      allow:
        - "127.0.0.1"
        - "10.0.0.0/8"
        - "192.168.0.0/16"
      status: 403
      message: "Forbidden"

  access_log:
    format: combined
    path: /app/logs/access.log
    filters: ...
    fields: ...
```

### Setting Up Providers

```yaml
providers:
  include:
    - file1.yml
    - file2.yml

  docker:
    local: $DOCKER_HOST
    remote-1: tcp://10.0.2.1:2375
    remote-2: ssh://root:1234@10.0.2.2

  agents:
    - 10.0.0.1:8899
    - 10.0.0.2:8899

  notification:
    - name: gotify
      provider: gotify
      url: https://gotify.example.com
      token: your-token

  proxmox:
    - url: https://pve.domain.com:8006/api2/json
      token_id: root@pam!abcdef
      secret: aaaa-bbbb-cccc-dddd
      no_tls_verify: true
```

![Providers](images/config/providers.png)

### Domain Matching

Specify which domains your application should respond to.

```yaml
match_domains:
  - yourdomain.com
```

See also: [Certificates and domain matching](Certificates-and-domain-matching)

### Homepage Settings

Configure how GoDoxy handles the WebUI App dashboard.

```yaml
homepage:
  use_default_categories: true
```

### Multi Docker Nodes Setup

#### Method 1: Using `godoxy-agent` (recommended)

##### How?

1. Create a directory for agent server, `cd` into it
2. Navigate to **Metrics tab** in Web UI, click **Add agent**, fill in required information then click **Copy docker compose**
3. Paste the docker compose into a file (e.g., `compose.yml`) on the agent server then start it with `docker compose up -d`

##### Why?

- `godoxy-agent` is a light-weight agent that handles docker, metrics and health checks
- Secure by default, with HTTPS and mTLS

#### Method 2: Using `docker-socket-proxy`

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

    # or less secure way
    # - 2375:2375
```

Add this to your `config.yml` under `providers.docker`:

```yaml
providers:
  docker:
    local: $DOCKER_HOST
    server-1: tcp://<ip>:2375 # add it here
```
