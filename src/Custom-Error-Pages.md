# Custom Error Pages

Configure custom HTML error pages to provide branded, user-friendly responses when errors occur.

## Overview

GoDoxy supports custom error pages for HTTP status codes. When an error occurs, GoDoxy will serve your custom page instead of generic browser error pages. This feature is useful for:

- Maintaining consistent branding across error responses
- Providing helpful guidance to users when errors occur
- Supporting multiple languages or themes
- Integrating with your application's design system

## Quick Start

1. Create an `error_pages` directory in your project
2. Add HTML files named after status codes (e.g., `404.html`, `500.html`)
3. Mount the directory to `/app/error_pages` in the GoDoxy container

## Directory Structure

All error page files must reside in the root of the `error_pages` directory. Subdirectories are not supported.

```
project/
├── error_pages/
│   ├── 400.html
│   ├── 403.html
│   ├── 404.html
│   ├── 500.html
│   ├── 502.html
│   ├── 503.html
│   └── style.css
└── docker-compose.yml
```

## Configuration

### Docker Mount

Mount your error pages directory to the GoDoxy container:

```yaml
services:
  godoxy:
    image: godoxy:latest
    container_name: godoxy
    volumes:
      - ./error_pages:/app/error_pages
      - ./config.yaml:/app/config.yaml:ro
    ports:
      - '80:80'
      - '443:443'
```

### File Naming Convention

Error pages must be named using the HTTP status code:

| File       | HTTP Status           |
| ---------- | --------------------- |
| `400.html` | Bad Request           |
| `403.html` | Forbidden             |
| `404.html` | Not Found             |
| `500.html` | Internal Server Error |
| `502.html` | Bad Gateway           |
| `503.html` | Service Unavailable   |

## Asset References

Use the `/$gperrorpage/` prefix for all relative asset paths. This ensures assets load correctly regardless of the original request URL.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Not Found</title>
    <link rel="stylesheet" href="/$gperrorpage/style.css" />
    <script src="/$gperrorpage/app.js" defer></script>
  </head>
  <body>
    <div class="error-container">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go Home</a>
    </div>
  </body>
</html>
```

### Supported Asset Types

- CSS files (`<link rel="stylesheet">`)
- JavaScript files (`<script src="...">`)
- Images (`<img src="...">`)
- Fonts (`@font-face`, `font-family`)
- Favicons (`<link rel="icon">`)

## Serving Conditions

Custom error pages are served when:

1. **Route Not Found**: The requested route doesn't exist in your configuration
2. **Domain Mismatch**: The request domain doesn't match configured `match_domains`
3. **HTTP Error Status**: Response status code is outside 200-299 range
4. **Supported Content Types**: Error pages apply to:
   - `text/html`
   - `application/xhtml+xml`
   - `text/plain`
5. **Middleware**: Configured as a middleware for specific routes

### Priority Order

GoDoxy checks for error pages in this order:

1. Exact match: `<statusCode>.html` (e.g., `503.html`)
2. Fallback: `404.html`
3. Original response: If no custom page exists

## Hot Reload

Error pages support hot reload during development. Changes to files in the `error_pages` directory apply immediately on page refresh.

## Best Practices

### Include Useful Information

Help users understand what happened and what to do next:

```html
<div class="error-content">
  <h1>Something went wrong</h1>
  <p>We're working on fixing this issue.</p>
  <p>Try again in a few minutes or <a href="/contact">contact support</a>.</p>
</div>
```

### Maintain Branding

Keep error pages consistent with your application's design:

```css
/* Match your app's color scheme */
:root {
  --primary-color: #3b82f6;
  --text-color: #1f2937;
}

.error-container {
  color: var(--text-color);
}
```

### Keep Pages Lightweight

Error pages may be served when resources are unavailable. Avoid heavy dependencies:

- Minimal JavaScript
- Inline critical CSS
- Avoid external CDN dependencies

## Troubleshooting

### Assets Not Loading

Ensure all asset paths use the `/$gperrorpage/` prefix:

```html
<!-- ❌ Incorrect -->
<link rel="stylesheet" href="/css/style.css" />

<!-- ✅ Correct -->
<link rel="stylesheet" href="/$gperrorpage/style.css" />
```

### Error Page Not Showing

1. Verify the file exists in the correct location
2. Check the file name matches the HTTP status code
3. Ensure the volume mount is correct
4. Confirm the content type is supported

### Subdirectories Not Supported

Place all error page files directly in `error_pages/`:

```
error_pages/
├── 404.html     ✅
├── 500.html     ✅
└── errors/      ❌
    └── 404.html // Not detected
```
