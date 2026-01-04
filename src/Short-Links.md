# Short Links (go/)

Redirect short, memorable links to your services using the built-in `go/` shortlink feature.

## How It Works

Requests to the `go` hostname are intercepted and redirected to the target service based on the alias.

## Configuration

### DNS Setup

Configure your DNS so that the `go` hostname points to GoDoxy:

```
go -> <godoxy-server-ip>
```

The Host header must be exactly `go` (e.g., via `/etc/hosts` or internal DNS).

### Environment Variable

| Variable           | Default | Description                     |
| ------------------ | ------- | ------------------------------- |
| `SHORTLINK_PREFIX` | `go`    | Hostname prefix for short links |

## Examples

Given a service with alias `git` and default domain `example.com`:

| URL (Host: go)         | Redirects To                      |
| ---------------------- | --------------------------------- |
| `http://go/git`        | `https://git.example.com/`        |
| `http://go/git/docs`   | `https://git.example.com/docs`    |
| `http://go/git?page=1` | `https://git.example.com/?page=1` |

For FQDN aliases like `git.company.com`:

| URL (Host: go)              | Redirects To               |
| --------------------------- | -------------------------- |
| `http://go/git`             | `https://git.company.com/` |
| `http://go/git.company.com` | `https://git.company.com/` |

## Requirements

- **DNS**: The `go` hostname must resolve to GoDoxy.
  - You need either custom DNS for your network (e.g. `AdguardHome`)
  - **or** a local hosts file entry:
    - On Linux/macOS: `/etc/hosts`
    - On Windows: `C:\Windows\System32\drivers\etc\hosts`

2. **Default domain**: At least one match domain or autocert must be configured for subdomain aliases
