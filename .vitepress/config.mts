import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
