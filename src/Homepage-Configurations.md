# Homepage Configurations

> [!NOTE]
>
> Starting from v0.9, you can **edit, hide/unhide apps directly from WebUI by a right click.**
>
> Editing from WebUI will override labels and route files settings.

Please contribute to the [category preset](https://github.com/yusing/godoxy/blob/main/internal/homepage/categories.go) if you have the time.

## Properties

| Property      | Description                                                                                                                                                                                 | Default                                                                                                                                                                                                                                 | Allowed Values / Syntax                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|               |
| show          | Whether to show the app                                                                                                                                                                     | `true`                                                                                                                                                                                                                                  | boolean                                                                                                                                                |
| name          | Display name on dashboard                                                                                                                                                                   | alias (subdomain) to "Title case" and replaced whitespace ` ` and underscore `_` with hyphen `-`                                                                                                                                        | string                                                                                                                                                 |
| icon          | <ul><li>Icon from [walkxcode](https://github.com/walkxcode/dashboard-icons) or [selfh.st](https://selfh.st/icons)</li><li>Absolute Icon URL</li><li>Relative path to proxy target</li></ul> | automatic detected                                                                                                                                                                                                                      | <ul><li>`"@walkxcode/<filename>.png"`<br/>`"@selfhst/<filename>.svg"`</li><li>`"https://example.com/icon.png"`</li><li>`"/path/to/icon.png"`</li></ul> |
| url           | Override app URL                                                                                                                                                                            | dynamic                                                                                                                                                                                                                                 | Absolute URL                                                                                                                                           |
| category      | Category on dashboard                                                                                                                                                                       | <ul><li>From preset if container image or alias matched <a href="https://github.com/yusing/godoxy/blob/main/internal/homepage/categories.go">the list</a></li><li>`Docker` for a docker containers</li><li>`Others` otherwise</li></ul> | string                                                                                                                                                 |
| description   | A short description shown under app name                                                                                                                                                    | empty                                                                                                                                                                                                                                   | string                                                                                                                                                 |
| widget_config | _Reserved, may support widgets in the future_                                                                                                                                               | null                                                                                                                                                                                                                                    | widget specific                                                                                                                                        |

## Examples

### Docker compose

```yaml
services:
  gitlab:
    image: gitlab/gitlab-ce:latest
    container_name: gitlab
    restart: always
    labels:
      proxy.aliases: gitlab,gitlab-reg,gitlab-ssh
      proxy.gitlab: |
        port: 80
        homepage:
          name: GitLab
          icon: "/-/pwa-icons/logo-192.png"
      proxy.gitlab-reg: |
        port: 5050
        homepage:
          show: false
      proxy.gitlab-ssh: |
        port: 22223:22
        homepage:
          show: false
    shm_size: 256m
```

### Route file

```yaml
adgh:
  host: 10.0.2.1
  homepage:
    name: AdGuard Home
    icon: "@selfhst/adguard-home.png"
```
