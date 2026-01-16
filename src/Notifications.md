# Notifications

Receive alerts about service health, certificate renewals, and configuration errors.

## Overview

GoDoxy sends notifications to configured providers when significant events occur. Configure one or more providers to receive alerts.

### Notification Events

| Event | Description |
|-------|-------------|
| Service Health | Route health status changes |
| Certificate Renewal | Success or failure of TLS certificate renewal |
| Configuration | Errors during config file reload |

## Configuration Methods

| Method | Description |
|--------|-------------|
| WebUI | Configure via WebUI config editor |
| config.yml | Edit `config/config.yml` directly |

## Providers

### Gotify

A simple self-hosted notification service.

```yaml
notification:
  - name: gotify
    provider: gotify
    url: https://gotify.my.site
    token: abcdef.12345
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Provider identifier | Yes |
| `provider` | Provider type | Yes (`gotify`) |
| `url` | Gotify server address | Yes |
| `token` | Authentication token | Yes |

### Ntfy

A flexible notification service with topic-based messaging.

```yaml
notification:
  - name: ntfy
    provider: ntfy
    url: https://ntfy.domain.com
    topic: some-topic
    # token: xxx  # Optional: if access tokens are configured
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Provider identifier | Yes |
| `provider` | Provider type | Yes (`ntfy`) |
| `url` | Ntfy server address (without topic) | Yes |
| `topic` | Target topic for messages | Yes |
| `token` | Access token (if required) | No |

### Discord Webhook

Send notifications to a Discord channel.

```yaml
notification:
  - name: discord
    provider: webhook
    url: https://discord.com/api/webhooks/...
    template: discord
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Provider identifier | Yes |
| `provider` | Provider type | Yes (`webhook`) |
| `url` | Discord webhook URL | Yes |
| `template` | Message template | No (`discord` for Discord format) |

### Custom Webhooks

Integrate with Slack, Matrix, or any service supporting webhooks.

```yaml
notification:
  - name: slack
    provider: webhook
    url: https://hooks.slack.com/services/...
    payload: |
      {
        "text": "$message",
        "username": "GoDoxy"
      }
    mime_type: application/json
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Provider identifier | Yes |
| `provider` | Provider type | Yes (`webhook`) |
| `url` | Webhook URL | Yes |
| `payload` | JSON body template | See note |
| `method` | HTTP method | No (`POST`) |
| `mime_type` | Content type | No |
| `token` | Bearer token (if required) | No |
| `color_mode` | Color format | No (`hex`) |

> [!NOTE]
>
> `payload` is required unless using a template like `discord`.

## Property Reference

### Common Fields

| Field | Description | Default | Values |
|-------|-------------|---------|--------|
| `name` | Provider identifier | Required | string |
| `provider` | Provider type | Required | `gotify`, `ntfy`, `webhook` |
| `url` | Server/webhook URL | Required | full URL |
| `format` | Message format | `markdown` | `markdown`, `plain` |

### Webhook Fields

| Field | Description | Default | Values |
|-------|-------------|---------|--------|
| `template` | Predefined template | none | `discord` |
| `payload` | Custom JSON payload | none | JSON string |
| `method` | HTTP request method | `POST` | `GET`, `POST`, `PUT` |
| `mime_type` | Content-Type header | auto | MIME type |
| `token` | Bearer authentication | none | string |
| `color_mode` | Color value format | `hex` | `hex`, `dec` |

## Payload Variables

Use these variables in custom webhook payloads:

| Variable | Description | Format |
|----------|-------------|--------|
| `$title` | Message title | JSON-escaped string |
| `$message` | Message body (Markdown) | JSON-escaped string |
| `$fields` | Structured message data | JSON object |
| `$color` | Message color | hex (`#ff0000`) or decimal |

### Example: Discord Embed

```json
{
    "embeds": [
        {
            "title": $title,
            "fields": $fields,
            "color": "$color"
        }
    ]
}
```

## Related Documentation

- [Configuring Routes](Configuring-Routes.md) - Route setup guide
- [Health Monitoring](Health-monitoring.md) - Health check configuration
- [Access Control](Access-Control.md) - Logging and access rules
