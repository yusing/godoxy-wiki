# CSS Injection

## Overview

CSS Injection is simple with help of the [`modify_html`](./Middlewares.md#modify-html) middleware.

## Example

Using themes from <https://docs.theme-park.dev>

```yaml
# docker labels
proxy.app.middlewares.modify_html: |
  target: body
  html: '<link rel="stylesheet" type="text/css" href="https://theme-park.dev/css/base/<app>/<theme>.css">'

# route file
app:
  middlewares:
    modify_html:
      target: body
      html: '<link rel="stylesheet" type="text/css" href="https://theme-park.dev/css/base/<app>/<theme>.css">'
```
