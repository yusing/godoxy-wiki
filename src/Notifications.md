# Notifications

## Usage

Notifications are sent to users to inform them about an event, update, or action.

Currently used for notifying service health status changes only.

## Enabling Notifications

To enable notifications, you need to configure it on WebUI or in your `config.yml` file. Follow these steps:

1. **Open `config/config.yml`** with WebUI config editor or a text editor.

2. **Add Gotify Notification Configuration:**

   ```yaml
   notification:
     - name: gotify
       provider: gotify
       url: https://gotify.my.site
       token: abcdef.12345
   ```

3. **Add Ntfy Notification Configuration:**

   ```yaml
   notification:
     - name: ntfy
       provider: ntfy
       url: https://ntfy.domain.com
       topic: some-topic
       # token: xxx # if your Ntfy is configured with access tokens
   ```

4. **Add Discord Notification Configuration:**

   ```yaml
   notification:
     - name: discord
       provider: webhook
       url: https://discord.com/api/webhooks/...
       template: discord
   ```

### Gotify Provider

- Set a `name` for your provider (e.g., `gotify`).
- Set the `provider` to `gotify`.
- Set the `url` to the address where Gotify is hosted.
- Set the `token` which is used to authenticate.

### Ntfy Provider

- Set a `name` for your provider (e.g., `ntfy`).
- Set the `provider` to `ntfy`.
- Set the `url` to the address (without topic) where Ntfy is hosted.
- Set the `topic` which is the message will be sent to.
- Set the `token` if your server is configured with access tokens.

### Discord Provider

- Set a `name` for your provider (e.g., `discord`).
- Set the `provider` to `webhook`.
- Set the `url` which is the webhook address for your Discord channel.
- Set the `template` to `discord` to use Discord formatting.

### Other webhook providers

- Set a `name` for your provider (e.g., `slack`).
- Set the `provider` to `webhook`.
- Set the `url` which is the webhook address for your Slack channel.
- Set the `payload` to appropriate JSON body for your webhook provider.
- Set the `token` if your provider requires authentication.

### WebUI config example

<img src="/images/config/gotify-notification.png" height="250" alt="Gotify Notification" title="Gotify Notification"/>
<img src="/images/config/discord-notification.png" height="250" alt="Discord Notification" title="Discord Notification"/>

## Full documentation

### Common Field

| Field    | Description          | Required                 | Allowed values            |
| -------- | -------------------- | ------------------------ | ------------------------- |
| name     | Name of the provider | Yes                      |                           |
| provider |                      | Yes                      | `gotify` `ntfy` `webhook` |
| url      | Provider URL         | Yes                      | Full URL                  |
| format   | Message Format       | No (default: `markdown`) | `markdown` `plain`        |

### Webhook

| Field      | Description            | Required                       | Allowed values   |
| ---------- | ---------------------- | ------------------------------ | ---------------- |
| provider   |                        | Yes                            | `webhook`        |
| template   | Webhook template       | No                             | empty, `discord` |
| token      | Webhook token          | No                             |                  |
| payload    | Webhook payload        | No **(if `template` is used)** | valid json       |
| method     | Webhook request method | No                             | `GET POST PUT`   |
| mime_type  | MIME type              | No                             |                  |
| color_mode | Color mode             | No                             | `hex` `dec`      |

### Available Payload Variables

- **$title:** Title of the message **(JSON escaped)**.
- **$message:** Message in Markdown format **(JSON escaped)**.
- **$fields:** Message in JSON format **(JSON escaped)**.
- **$color:** Color of the message in `hex` (e.g., `#ff0000`) or `dec` (e.g., `16711680`).

Example

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
