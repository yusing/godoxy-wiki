# Docker Labels and Route Files

## Why Use Labels?

Using labels, you can:

- Configure proxy settings (port, scheme, etc.)
- Set aliases for your services
- Specify middlewares, homepage config, etc.

## What Are Route Files?

- Route files are YAML files that are used to configure additional routes, typically for non-Docker apps.
- They are under `config/` directory, with a meaningful name like `config/pve.yml` (means routes are from Proxmox VMs/LXCs)
- They support hot-reloading (automatic reloading when file changes)
- If you don't have that many services, you can simply put all of them in a single file

## How to Use Them?

### Prerequisites

1. Use the `key: value` format for labels, not `- key=value`.
2. End multiline YAML strings with `|`.

### Label Syntax

There are two types of label syntax:

1. **Full Namespace (traefik like)**

   ```yaml
   services:
     app:
       labels:
         proxy.app.middlewares.request.set_headers.X-Custom-Header1: value1,value2
   ```

2. **Inline YAML String (`|` at the end)**

   ```yaml
   services:
     app:
       labels:
         proxy.app.middlewares.request.set_headers: |
           - X-Custom-Header1: value1
           - X-Custom-Header2: value2
   ```

3. **Mixing both (balance between convenience and readability)**

   ```yaml
   services:
     app:
       labels:
         proxy.app.middlewares.request.set_headers: |
           X-Custom-Header1: value1
           X-Custom-Header2: value2
         proxy.app.middlewares.request.hide_headers: |
           - X-Custom-Header4
           - X-Custom-Header5
         proxy.app_backend: |
           port: 8080
           healthcheck:
             path: /ping
             interval: 10s
   ```

### Example Docker Compose

```yaml
# compose.yml
service:
  app:
    image: app
    container_name: app
    ports:
      - 80 # e.g. frontend
      - 8080 # e.g. backend
    labels:
      proxy.app.port: 80
      proxy.app-backend.port: 8080
      # wildcard * means all services
      # put container to sleep after 1 hour of inactivity
      proxy.*.idle_timeout: 1h
      # homepage config
      proxy.app.homepage: |
        name: App
        icon: "@selfhst/app.svg"
        description: An app
        category: app
      # hide backend from homepage
      proxy.app-backend.homepage.show: false
```

#### Specifying docker network

```yaml
services:
  app:
    ...
    labels:
      proxy.network: app-network
    networks:
      - app-network
      - app-network-2
networks:
  app-network:
  app-network-2:
```

### Example Route File

```yaml
# config/app.yml
app:
  host: 10.0.9.98
  port: 80
  homepage:
    name: App
    icon: "@selfhst/app.svg"
    description: An app
    category: app
app-backend:
  host: 10.0.9.98
  port: 8080
  homepage:
    show: false
blog:
  scheme: fileserver
  root: /app/blog/public
```

- Frontend `http://app.domain.com/`
- Backend `http://app-backend.domain.com/`

### Example for FQDN matching

```yaml
# docker compose
services:
  app:
    ...
    labels:
      proxy.aliases: app.domain.com, app-backend.domain.com
      proxy.#1.port: 80 # #1 points to the first service `app.domain.com`
      proxy.#2.port: 8080 # #2 points to the second service `app-backend.domain.com`

# route file
app.domain.com:
  ...
app-backend.domain.com:
  ...
```

### Docker Troubleshooting

- If containers are not showing in the proxy list, make sure to map their ports:

  ```yaml
  services:
    nginx-1:
      expose:
        - 80
  ```

## Key Proxy Properties

1. **scheme**: Tells the proxy server what protocol to use to connect to your app

   - **Default**: Automatically determined based on the port.
   - **Values**: `http`, `https`, `tcp`, `udp`

2. **host**: Tells the proxy server what IP/hostname to connect to your app

   - **Docker**: The IP or hostname of the Docker client.
   - **File**: Typically `localhost`.

3. **port**: Tell the proxy server which port to connect to

   - **HTTP/HTTPS**: e.g., `80`, `443`
   - **TCP/UDP**: The port for GoDoxy to listen on, mapped to the target container's port. (e.g. `8080:80`)

4. **no_tls_verify** (optional): Whether skips TLS verification when scheme is `https`.

   - **Default**: `false`
   - **Values**: `true`, `false`

## Key File Server Properties

1. **scheme**: set it to `fileserver`

2. **root**: the root directory to serve files from

### Full Documentation

#### Docker Labels

> [!NOTE]
>
> - Parts surrounded by `[]` are optional\*\*
> - If `alias` is not in `proxy.aliases`, it will be created automatically

| Label                       | Description                                                   | Example                            | Default               | Accepted values                                                           |
| --------------------------- | ------------------------------------------------------------- | ---------------------------------- | --------------------- | ------------------------------------------------------------------------- |
| `proxy.{alias}.{property}`  | set field for specific alias                                  | `proxy.gitlab-ssh.scheme`          |                       |                                                                           |
| `proxy.#{index}.{property}` | set field for alias at index (starting from **1**)            | `proxy.#3.port`                    |                       |                                                                           |
| `proxy.*.{property}`        | set field for all aliases                                     | `proxy.*.set_headers`              |                       |                                                                           |
| `proxy.aliases`             | subdomains or FQDN for url matching (comma separated)         | `app`, `app.domain.com`, `app-tcp` | `container_name`      | any                                                                       |
| `proxy.exclude`             | should GoDoxy ignore this container                           |                                    | false                 | boolean                                                                   |
| `proxy.network`             | network to use for this container                              |                                    | first available network              | valid network name or empty                                                  |
| `proxy.idle_timeout`        | inactivity timeout before put it into sleep<br/>**❌TCP/UDP** | `1h30s`                            | empty **(disabled)**  | `number[unit]...`                                                         |
| `proxy.wake_timeout`        | time to wait for target site to be ready                      |                                    | `30s`                 | `number[unit]...`                                                         |
| `proxy.stop_method`         | method to stop after `idle_timeout`                           |                                    | `stop`                | `stop`, `pause`, `kill`                                                   |
| `proxy.stop_timeout`        | time to wait for stop command                                 |                                    | `10s`                 | `number[unit]...`                                                         |
| `proxy.stop_signal`         | signal sent to container for `stop` and `kill` methods        |                                    | docker's default      | `SIGINT`, `SIGTERM`, `SIGHUP`, `SIGQUIT` and those without **SIG** prefix |
| `proxy.start_endpoint`      | allow waking only from specific endpoint                      | `/start`                           | empty **(allow any)** | relative path                                                             |

#### Proxy Properties

| Property                                | Description                                                                                                                       | Default                                                                                                                                                                                                 | Allowed Values / Syntax                                                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `scheme`                                | Route type                                                                                                                        | <ul><li>`https` for numeric port ends with '443'</li><li>`http` for numeric port otherwise</li><li>`tcp` or `udp` for `x:y` port based on container exposed port type (`tcp` for route file) </li></ul> | `http`, `https`, `fileserver`, `tcp` `udp`                                                                                                      |
| `host`                                  | Proxy host                                                                                                                        | <ul><li>Docker: docker client IP / hostname </li><li>File: `localhost`</li></ul>                                                                                                                        | IP address, hostname                                                                                                                            |
| `port`                                  | Proxy port **(http/s)**                                                                                                           | lowest port returned from docker (e.g. [443,80,8080] => 80)                                                                                                                                             | number in range of `1 - 65535`                                                                                                                  |
| `port`                                  | Proxy port **(tcp/udp)**                                                                                                          | `0:lowest_port`                                                                                                                                                                                         | `x:y` <br/><ul><li>**x**: port for GoDoxy to listen on.<br>listen on a random port when `x` is zero</li><li>**y**: port to proxy from</li></ul> |
| `no_tls_verify`                         | Whether skip TLS verification when scheme is `https`                                                                              | `false`                                                                                                                                                                                                 | boolean                                                                                                                                         |
| `response_header_timeout`               | Response header timeout<br/>**❌TCP/UDP/File Server**                                                                             | `60s`                                                                                                                                                                                                   | duration                                                                                                                                        |
| `disable_compression`                   | Disable compression for this route<br/>**❌TCP/UDP/File Server**                                                                  | `false`                                                                                                                                                                                                 | boolean                                                                                                                                         |
| `rules`                                 | [Experimental rule base routing](Rule-Based-Routing)<br/>**❌TCP/UDP/File Server**                                                |                                                                                                                                                                                                         |                                                                                                                                                 |
| `load_balance.{property}`               | Enable and set field for specific load balancer<br/>**❌TCP/UDP/File Server**, See [Load Balancing Configuration](Load-Balancing) |                                                                                                                                                                                                         |                                                                                                                                                 |
| `middlewares.{middleware}[.{property}]` | Enable and set field for specific middleware, [See Middlewares](Middlewares)<br/>**❌TCP/UDP**                                    |                                                                                                                                                                                                         |                                                                                                                                                 |
| `homepage.{property}`                   | [WebUI Configurations](WebUI.md)<br/>**❌TCP/UDP**                                                                                |                                                                                                                                                                                                         |                                                                                                                                                 |
| `healthcheck.{property}`                | [Health Monitoring Configurations](Health-monitoring)                                                                             |                                                                                                                                                                                                         |                                                                                                                                                 |
| `access_log.{property}`                 | [Access Log Configurations](Access-Control#access-logging)<br/>**❌TCP/UDP**                                                      |                                                                                                                                                                                                         |                                                                                                                                                 |

#### Route Files

Like in docker compose, you can use x-properties for YAML anchors in route files

```yaml
x-proxy: &proxy # ignored
  scheme: https
  middlewares:
    hideXForwarded:
    modifyRequest:
      setHeaders:
        Host: $req_host

api.example.com:
  <<: *proxy # inherit from proxy
  host: api.example.com
```

Full Example

```yaml
example: # matching `example.y.z`
  scheme: http
  host: 10.0.0.254
  port: 80
  path_patterns: # Check https://pkg.go.dev/net/http#hdr-Patterns-ServeMux for syntax
    - GET / # accept any GET request
    - POST /auth # for /auth and /auth/* accept only POST
    - GET /home/{$} # for exactly /home
  healthcheck:
    disabled: false
    path: /
    interval: 5s
  load_balance:
    link: app
    mode: ip_hash
    options:
      header: X-Forwarded-For
  middlewares:
    cidr_whitelist:
      allow:
        - 127.0.0.1
        - 10.0.0.0/8
      status_code: 403
      message: IP not allowed
    hideXForwarded:
  homepage:
    name: Example App
    icon: png/example.png
    description: An example app
    category: example
  access_log:
    buffer_size: 100
    path: /var/log/example.log
    filters:
      status_codes:
        values:
          - 200-299
          - 101
      method:
        values:
          - GET
      host:
        values:
          - example.y.z
      headers:
        negative: true
        values:
          - foo=bar
          - baz
      cidr:
        values:
          - 192.168.10.0/24
    fields:
      headers:
        default: keep
        config:
          foo: redact
      query:
        default: drop
        config:
          foo: keep
      cookies:
        default: redact
        config:
          foo: keep
```
