# Idle-sleep

## Why?

Docker containers / Proxmox LXCs consume resources even when they are idle. This can lead to unexpected costs and performance issues.

## How?

GoDoxy will put containers to sleep when there is no traffic for a specified period of time. When any traffic is received, the container will be woken up.

## Configuration

| Label            | Description                                                   | Example  | Default               | Accepted values                                                           |
| ---------------- | ------------------------------------------------------------- | -------- | --------------------- | ------------------------------------------------------------------------- |
| `idle_timeout`   | inactivity timeout before put it into sleep<br/>**❌TCP/UDP** | `1h30s`  | empty **(disabled)**  | `number[unit]...`                                                         |
| `wake_timeout`   | time to wait for target site to be ready                      |          | `30s`                 | `number[unit]...`                                                         |
| `stop_method`    | method to stop after `idle_timeout`                           |          | `stop`                | `stop`, `pause`, `kill`                                                   |
| `stop_timeout`   | time to wait for stop command                                 |          | `10s`                 | `number[unit]...`                                                         |
| `stop_signal`    | signal sent to container for `stop` and `kill` methods        |          | docker's default      | `SIGINT`, `SIGTERM`, `SIGHUP`, `SIGQUIT` and those without **SIG** prefix |
| `start_endpoint` | allow waking only from specific endpoint                      | `/start` | empty **(allow any)** | relative URI                                                              |

### Docker

To enable idlesleep, add the following label(s) to your container:

```yaml
# compose.yml
services:
  app:
    image: abcd
    ...
    labels:
      proxy.idle_timeout: 1h30s     # required
      proxy.wake_timeout: 30s       # optional
      proxy.stop_method: stop       # optional
      proxy.stop_timeout: 10s       # optional
      proxy.stop_signal: SIGINT     # optional
      proxy.start_endpoint: /start  # optional
```

### Proxmox LXCs

To setup GoDoxy to manage proxmox LXCs. You need to do the following:

1. Add proxmox credentials to `config.yml`

```yaml
# config.yml
providers:
  proxmox:
    - url: https://pve.domain.com:8006/api2/json
      token_id: root@pam!abcdef
      secret: aaaa-bbbb-cccc-dddd
      no_tls_verify: true
```

2. Create API Token on Proxmox

![Proxmox API Token](images/proxmox-api-token.png)

3. Allow required permissions

![Proxmox Permissions](images/proxmox-permissions.png)

4. Add LXCs to route files

Node Name:

![Proxmox Node Name](images/proxmox-node.png)

VMID:

![Proxmox LXC VMID](images/proxmox-lxc-vmid.png)

```yaml
lxc-test:
  port: 3000
  idlewatcher:
    idle_timeout: 15s
    proxmox:
      node: pve
      vmid: 119
```
