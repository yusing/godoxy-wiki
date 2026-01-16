import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'GoDoxy',
    description: 'Documentations',
    srcDir: 'src',
    lastUpdated: true,
    cleanUrls: true,
    markdown: {
      theme: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
    themeConfig: {
      search: {
        provider: 'local',
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Install', link: '/Setup.md' },
        { text: 'API Docs', link: '/api.md' },
        { text: 'Gallery', link: '/Gallery.md' },
      ],
      sidebar: [
        {
          text: 'Install',
          items: [
            { text: 'Automatic', link: '/Setup.md#automatic' },
            { text: 'Manual', link: '/Setup.md#manual-setup' },
          ],
        },
        {
          text: 'Getting Started',
          items: [
            { text: 'Basics', link: '/Home.md' },
            { text: 'Examples', link: '/Examples.md' },
            { text: 'Configuring GoDoxy', link: '/Configuring-GoDoxy.md' },
            {
              text: 'Configuring Routes',
              link: '/Configuring-Routes.md',
            },
            {
              text: 'Multi Docker Nodes',
              link: '/Multi-Docker-Nodes.md',
            },
            {
              text: 'DNS-01 Providers',
              link: '/DNS-01-Providers.md',
            },
            {
              text: 'OpenID Connect',
              link: '/OIDC.md',
            },
          ],
        },
        {
          text: 'Customization',
          items: [
            {
              text: 'WebUI',
              link: '/WebUI.md',
            },
            {
              text: 'Custom Error Pages',
              link: '/Custom-Error-Pages.md',
            },
            {
              text: 'CSS Injection',
              link: '/CSS-Injection.md',
            },
            {
              text: 'Short Links',
              link: '/Short-Links.md',
            },
          ],
        },
        {
          text: 'Advanced Topics',
          items: [
            {
              text: 'Benchmarks and Resource Usage',
              link: '/Benchmarks-and-Resource-Usage.md',
            },
            {
              text: 'Access Control',
              link: '/Access-Control.md',
              items: [
                {
                  text: 'Layer 4 - TCP/UDP',
                  link: '/Access-Control.md#layer-4',
                },
                {
                  text: 'Layer 7 - HTTP',
                  link: '/Access-Control.md#layer-7',
                },
                {
                  text: 'Access Logging',
                  link: '/Access-Control.md#access-logging',
                },
              ],
            },
            {
              text: 'Idle-Sleep',
              link: '/Idle-Sleep.md',
              items: [
                {
                  text: 'Docker Containers',
                  link: '/Idle-Sleep.md#docker',
                },
                {
                  text: 'Proxmox LXCs',
                  link: '/Idle-Sleep.md#proxmox-lxcs',
                },
              ],
            },
            {
              text: 'Health monitoring',
              link: '/Health-monitoring.md',
            },
            {
              text: 'Certificates and Domain Matching',
              link: '/Certificates-and-domain-matching.md',
            },
            {
              text: 'Middlewares',
              link: '/Middlewares.md',
              collapsed: true,
              items: [
                {
                  text: 'Quick Start',
                  link: '/Middlewares.md#quick-start',
                },
                {
                  text: 'Applying Middlewares',
                  link: '/Middlewares.md#applying-middlewares',
                  items: [
                    {
                      text: 'Entrypoint & Compose',
                      link: '/Middlewares.md#entrypoint--middleware-compose',
                    },
                    {
                      text: 'Docker Labels',
                      link: '/Middlewares.md#docker-labels',
                    },
                    {
                      text: 'Route Files',
                      link: '/Middlewares.md#route-files',
                    },
                    {
                      text: 'Reusing Compositions',
                      link: '/Middlewares.md#reusing-compositions',
                    },
                    {
                      text: 'Bypass Rules',
                      link: '/Middlewares.md#bypass-rules',
                    },
                  ],
                },
                {
                  text: 'Authentication & Security',
                  link: '/Middlewares.md#authentication--security',
                  items: [
                    {
                      text: 'OIDC',
                      link: '/Middlewares.md#oidc',
                    },
                    {
                      text: 'hCaptcha',
                      link: '/Middlewares.md#hcaptcha',
                    },
                    {
                      text: 'Forward Auth',
                      link: '/Middlewares.md#forward-auth',
                    },
                  ],
                },
                {
                  text: 'IP Resolution',
                  link: '/Middlewares.md#ip-resolution',
                  items: [
                    {
                      text: 'Real IP',
                      link: '/Middlewares.md#real-ip',
                    },
                    {
                      text: 'Cloudflare Real IP',
                      link: '/Middlewares.md#cloudflare-real-ip',
                    },
                  ],
                },
                {
                  text: 'Access Control',
                  link: '/Middlewares.md#access-control',
                  items: [
                    {
                      text: 'CIDR Whitelist',
                      link: '/Middlewares.md#cidr-whitelist',
                    },
                    {
                      text: 'Rate Limiter',
                      link: '/Middlewares.md#rate-limiter',
                    },
                  ],
                },
                {
                  text: 'Traffic Control',
                  link: '/Middlewares.md#traffic-control',
                  items: [
                    {
                      text: 'Redirect HTTP',
                      link: '/Middlewares.md#redirect-http',
                    },
                    {
                      text: 'Custom Error Pages',
                      link: '/Middlewares.md#custom-error-pages',
                    },
                  ],
                },
                {
                  text: 'Request/Response Modification',
                  link: '/Middlewares.md#request-response-modification',
                  items: [
                    {
                      text: 'Modify Request/Response',
                      link: '/Middlewares.md#modify-request-response',
                    },
                    {
                      text: 'Supported Variables',
                      link: '/Middlewares.md#supported-variables',
                    },
                    {
                      text: 'Header Modification',
                      link: '/Middlewares.md#header-modification',
                    },
                    {
                      text: 'X-Forwarded Headers',
                      link: '/Middlewares.md#x-forwarded-headers',
                    },
                  ],
                },
                {
                  text: 'Content Modification',
                  link: '/Middlewares.md#content-modification',
                  items: [
                    {
                      text: 'Modify HTML',
                      link: '/Middlewares.md#modify-html',
                    },
                    {
                      text: 'Themed',
                      link: '/Middlewares.md#themed',
                    },
                  ],
                },
                {
                  text: 'Variables Reference',
                  link: '/Middlewares.md#variables-reference',
                },
                {
                  text: 'Examples',
                  link: '/Middlewares.md#examples',
                },
              ],
            },
            {
              text: 'Notifications',
              link: '/Notifications.md',
            },
            {
              text: 'Load Balancing',
              link: '/Load-Balancing.md',
            },
            {
              text: 'Rule Based Routing',
              link: '/Rule-Based-Routing.md',
            },
          ],
        },
        {
          text: 'Implementation Details',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/impl/introduction.md' },
            // GENERATED-IMPL-SIDEBAR-START
            { text: 'agent/cmd', link: '/impl/agent-cmd' },
            { text: 'agent/pkg/agent', link: '/impl/agent-pkg-agent' },
            { text: 'agent/pkg/agent/stream', link: '/impl/agent-pkg-agent-stream' },
            { text: 'agent/pkg/agentproxy', link: '/impl/agent-pkg-agentproxy' },
            { text: 'agent/pkg/certs', link: '/impl/agent-pkg-certs' },
            { text: 'agent/pkg/env', link: '/impl/agent-pkg-env' },
            { text: 'agent/pkg/handler', link: '/impl/agent-pkg-handler' },
            { text: 'cmd', link: '/impl/cmd' },
            { text: 'goutils/cache', link: '/impl/goutils-cache' },
            { text: 'goutils/env', link: '/impl/goutils-env' },
            { text: 'goutils/errs', link: '/impl/goutils-errs' },
            { text: 'goutils/fs', link: '/impl/goutils-fs' },
            { text: 'goutils/http', link: '/impl/goutils-http' },
            { text: 'goutils/http/accesslog', link: '/impl/goutils-http-accesslog' },
            { text: 'goutils/http/httpheaders', link: '/impl/goutils-http-httpheaders' },
            { text: 'goutils/http/reverseproxy', link: '/impl/goutils-http-reverseproxy' },
            { text: 'goutils/http/websocket', link: '/impl/goutils-http-websocket' },
            { text: 'goutils/intern', link: '/impl/goutils-intern' },
            { text: 'goutils/io', link: '/impl/goutils-io' },
            { text: 'goutils/mockable', link: '/impl/goutils-mockable' },
            { text: 'goutils/num', link: '/impl/goutils-num' },
            { text: 'goutils/pool', link: '/impl/goutils-pool' },
            { text: 'goutils/server', link: '/impl/goutils-server' },
            { text: 'goutils/strings', link: '/impl/goutils-strings' },
            { text: 'goutils/strings/ansi', link: '/impl/goutils-strings-ansi' },
            { text: 'goutils/synk', link: '/impl/goutils-synk' },
            { text: 'goutils/task', link: '/impl/goutils-task' },
            { text: 'goutils/testing', link: '/impl/goutils-testing' },
            { text: 'goutils/version', link: '/impl/goutils-version' },
            { text: 'internal/acl', link: '/impl/internal-acl' },
            { text: 'internal/agentpool', link: '/impl/internal-agentpool' },
            { text: 'internal/api/v1', link: '/impl/internal-api-v1' },
            { text: 'internal/auth', link: '/impl/internal-auth' },
            { text: 'internal/autocert', link: '/impl/internal-autocert' },
            { text: 'internal/config', link: '/impl/internal-config' },
            { text: 'internal/config/query', link: '/impl/internal-config-query' },
            { text: 'internal/dnsproviders', link: '/impl/internal-dnsproviders' },
            { text: 'internal/docker', link: '/impl/internal-docker' },
            { text: 'internal/entrypoint', link: '/impl/internal-entrypoint' },
            { text: 'internal/health/check', link: '/impl/internal-health-check' },
            { text: 'internal/health/monitor', link: '/impl/internal-health-monitor' },
            { text: 'internal/homepage', link: '/impl/internal-homepage' },
            { text: 'internal/homepage/icons', link: '/impl/internal-homepage-icons' },
            {
              text: 'internal/homepage/integrations/qbittorrent',
              link: '/impl/internal-homepage-integrations-qbittorrent',
            },
            { text: 'internal/homepage/types', link: '/impl/internal-homepage-types' },
            { text: 'internal/homepage/widgets', link: '/impl/internal-homepage-widgets' },
            { text: 'internal/idlewatcher', link: '/impl/internal-idlewatcher' },
            { text: 'internal/idlewatcher/provider', link: '/impl/internal-idlewatcher-provider' },
            { text: 'internal/jsonstore', link: '/impl/internal-jsonstore' },
            { text: 'internal/logging', link: '/impl/internal-logging' },
            { text: 'internal/logging/accesslog', link: '/impl/internal-logging-accesslog' },
            { text: 'internal/logging/memlogger', link: '/impl/internal-logging-memlogger' },
            { text: 'internal/maxmind', link: '/impl/internal-maxmind' },
            { text: 'internal/metrics', link: '/impl/internal-metrics' },
            { text: 'internal/metrics/period', link: '/impl/internal-metrics-period' },
            { text: 'internal/metrics/systeminfo', link: '/impl/internal-metrics-systeminfo' },
            { text: 'internal/metrics/uptime', link: '/impl/internal-metrics-uptime' },
            { text: 'internal/net', link: '/impl/internal-net' },
            { text: 'internal/net/gphttp', link: '/impl/internal-net-gphttp' },
            { text: 'internal/net/gphttp/loadbalancer', link: '/impl/internal-net-gphttp-loadbalancer' },
            { text: 'internal/net/gphttp/middleware', link: '/impl/internal-net-gphttp-middleware' },
            { text: 'internal/net/gphttp/middleware/captcha', link: '/impl/internal-net-gphttp-middleware-captcha' },
            { text: 'internal/net/gphttp/middleware/errorpage', link: '/impl/internal-net-gphttp-middleware-errorpage' },
            { text: 'internal/notif', link: '/impl/internal-notif' },
            { text: 'internal/proxmox', link: '/impl/internal-proxmox' },
            { text: 'internal/route', link: '/impl/internal-route' },
            { text: 'internal/route/provider', link: '/impl/internal-route-provider' },
            { text: 'internal/route/routes', link: '/impl/internal-route-routes' },
            { text: 'internal/route/rules', link: '/impl/internal-route-rules' },
            { text: 'internal/route/rules/presets', link: '/impl/internal-route-rules-presets' },
            { text: 'internal/route/stream', link: '/impl/internal-route-stream' },
            { text: 'internal/serialization', link: '/impl/internal-serialization' },
            { text: 'internal/watcher', link: '/impl/internal-watcher' },
            { text: 'internal/watcher/events', link: '/impl/internal-watcher-events' },
            { text: 'socket-proxy/cmd', link: '/impl/socket-proxy-cmd' },
            { text: 'socket-proxy/pkg', link: '/impl/socket-proxy-pkg' },
            { text: 'socket-proxy/pkg/reverseproxy', link: '/impl/socket-proxy-pkg-reverseproxy' },
            // GENERATED-IMPL-SIDEBAR-END
          ],
        },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/yusing/godoxy' },
        { icon: 'discord', link: 'https://discord.gg/invite/umReR62nRd' },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Yusing',
      },
    },
  })
)
