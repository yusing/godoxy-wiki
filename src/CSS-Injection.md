# CSS Injection

## Overview

CSS Injection is simple with help of the [`themed`](./Middlewares.md#themed) middleware.

## Example

Using themes from <https://docs.theme-park.dev>

```yaml
# docker labels
proxy.app.middlewares.themed.css: https://theme-park.dev/css/base/<app>/<theme>.css

# route file
app:
  middlewares:
    themed:
      css: https://theme-park.dev/css/base/<app>/<theme>.css
```

Check out the [`themed` middleware](./Middlewares.md#themed) middleware for more options.
