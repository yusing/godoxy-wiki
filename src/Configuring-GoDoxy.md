# Configuring GoDoxy

## Basic Config File

Here's a simple example of a configuration file:

```yaml
providers:
  docker:
    local: $DOCKER_HOST
```

### Understanding the Config File

The `config.yml` file is divided into several sections:

| Section                      | Description                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| `acl`                        | Handles access control                                                                   |
| `autocert`                   | Handles SSL certificate settings                                                         |
| `entrypoint`                 | Manages GoDoxy entrypoints (port 80 and 443)                                             |
| &nbsp;&nbsp;↳ `middlewares`  | Defines middleware settings                                                              |
| &nbsp;&nbsp;↳ `access_log`   | Configures access logs                                                                   |
| `providers`                  | Sets up orchestrators (<span style="font-weight: bold; color: #e57373;">required</span>) |
| &nbsp;&nbsp;↳ `include`      | Includes route configuration files                                                       |
| &nbsp;&nbsp;↳ `docker`       | Configures Docker providers                                                              |
| &nbsp;&nbsp;↳ `agents`       | GoDoxy agents                                                                            |
| &nbsp;&nbsp;↳ `proxmox`      | Proxmox credentials                                                                      |
| &nbsp;&nbsp;↳ `notification` | Configures notifications for health monitoring                                           |
| &nbsp;&nbsp;↳ `maxmind`      | MaxMind credentials                                                                      |
| `match_domains`              | List of domains to match                                                                 |
| `defaults`                   | Default values                                                                           |
| `homepage`                   | Configures homepage settings                                                             |

### Environment Variables substitution

Environment variables can be substituted in **every YAML string** using the `${VAR_NAME}` syntax.

```yaml
autocert:
  ...
  options:
    auth_token: ${AUTH_TOKEN}
```

### Auto SSL and Domain matching

Specify which domains your application should respond to.

```yaml
autocert:
  provider: cloudflare
  email: your-email@example.com
  domains:
    - *.yourdomain.com
match_domains:
  - yourdomain.com
```

See [Certificates and domain matching](Certificates-and-domain-matching)

### Entrypoint Configuration

This section defines how GoDoxy handles incoming requests.

```yaml
entrypoint:
  middlewares:
    - use: CIDRWhitelist
      allow:
        - '127.0.0.1'
        - '10.0.0.0/8'
        - '192.168.0.0/16'
      status: 403
      message: 'Forbidden'

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
    local: ${DOCKER_HOST}
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

  maxmind:
    account_id: 123456
    license_key: your-license-key
    database: geolite # or geoip2 if you have subscription
```

### Default Values

```yaml
defaults:
  healthcheck:
    interval: 5s
    timeout: 15s
    retries: 3
```

### Homepage Settings

Configure how GoDoxy handles the WebUI App dashboard.

```yaml
homepage:
  use_default_categories: true
```

See [WebUI Configurations](WebUI.md)
