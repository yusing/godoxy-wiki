# Custom Error Pages

To enable custom error pages, place page files (`html`, `js`, `css`) in `error_pages` directory.

> [!NOTE]
> Subfolders are not considered

## Setup

### Directory Structure

All files for error pages must reside in the root directory of the `error_pages` folder.

### Mount it to GoDoxy

```yaml
services:
  app:
    container_name: godoxy
    ...
    volumes:
      ...
      - ./error_pages:/app/error_pages
```

### Using Links in HTML

Any `href` or `src` within your error pages must begin with `/$gperrorpage/`.

```html
<html>
  <head>
    <title>404 Not Found</title>
    <link type="text/css" rel="stylesheet" href="/$gperrorpage/style.css" />
  </head>
  <body>
    ...
  </body>
</html>
```

### Hot-reload supported

New changes will apply on page refresh.

### Conditions for Serving the Error Page

- **Non-Existent Route or Domain Mismatch**: If the requested route doesn't exist or doesn't match the `match_domains`, an error page will be served.
- **HTTP Status Code Out of the 200-300 Range**: If the HTTP status code is not in this range and the content type is `text/html`, `application/xhtml+xml`, or `text/plain`, an error page will be served.
- **Middleware Configuration**: Error pages can also be enabled for specific routes as a middleware.

### How Error Pages are Served

- The file matching `<statusCode>.html` if present.
- Fallback to the `404.html` file.
- If neither exists, the original response is returned.
