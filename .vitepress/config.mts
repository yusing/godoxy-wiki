import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GoDoxy",
  description: "Documentations",
  srcDir: "src",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/Setup.md" },
      { text: "Gallery", link: "/Gallery.md" },
    ],

    sidebar: [
      {
        text: "Install",
        items: [
          { text: "Automatic", link: "/Setup.md#automatic" },
          { text: "Manual", link: "/Setup.md#manual-setup" },
        ],
      },
      {
        text: "Getting Started",
        items: [
          { text: "Basics", link: "/Home.md" },
          { text: "Examples", link: "/Examples.md" },
          { text: "Configurations", link: "/Configurations.md" },
          {
            text: "Docker Labels and Route Files",
            link: "/Docker-labels-and-Route-Files.md",
          },
          {
            text: "DNS-01 Providers",
            link: "/DNS-01-Providers.md",
          },
        ],
      },
      {
        text: "Customization",
        items: [
          {
            text: "Homepage Configurations",
            link: "/Homepage-Configurations.md",
          },
          {
            text: "Custom Error Pages",
            link: "/Custom-Error-Pages.md",
          },
        ],
      },
      {
        text: "Advanced Topics",
        items: [
          {
            text: "Access Control",
            link: "/Access-Control.md",
            items: [
              {
                text: "Connection Level",
                link: "/Access-Control.md#connection-level-access-control",
              },
              {
                text: "Request Level",
                link: "/Access-Control.md#request-level-access-control",
              },
              {
                text: "Access Logging",
                link: "/Access-Control.md#access-logging",
              },
            ],
          },
          {
            text: "Idle-Sleep",
            link: "/Idle-Sleep.md",
            items: [
              {
                text: "Docker Containers",
                link: "/Idle-Sleep.md#docker",
              },
              {
                text: "Proxmox LXCs",
                link: "/Idle-Sleep.md#proxmox-lxcs",
              },
            ],
          },
          {
            text: "Health monitoring",
            link: "/Health-monitoring.md",
          },
          {
            text: "Certificates and Domain Matching",
            link: "/Certificates-and-domain-matching.md",
          },
          {
            text: "Middlewares",
            link: "/Middlewares.md",
            collapsed: true,
            items: [
              {
                text: "OpenID Connect",
                link: "/Middlewares.md#oidc",
              },
              {
                text: "Redirect to HTTPS",
                link: "/Middlewares.md#redirect-http",
              },
              {
                text: "Custom Error Pages",
                link: "/Middlewares.md#custom-error-pages",
              },
              {
                text: "Real IP",
                link: "/Middlewares.md#real-ip",
              },
              {
                text: "Cloudflare Real IP",
                link: "/Middlewares.md#cloudflare-real-ip",
              },
              {
                text: "CIDR Whitelist",
                link: "/Middlewares.md#cidr-whitelist",
              },
              {
                text: "Rate Limiter",
                link: "/Middlewares.md#rate-limiter",
              },
              {
                text: "Modify Request or Response",
                link: "/Middlewares.md#modify-request-or-response",
                items: [
                  {
                    text: "Set Headers",
                    link: "/Middlewares.md#set-headers",
                  },
                  {
                    text: "Add Headers",
                    link: "/Middlewares.md#add-headers",
                  },
                  {
                    text: "Hide Headers",
                    link: "/Middlewares.md#hide-headers",
                  },
                ],
              },
              {
                text: "X-Forwarded Headers",
                link: "/Middlewares.md#x-forwarded-headers",
                items: [
                  {
                    text: "Hide X-Forwarded Headers",
                    link: "/Middlewares.md#hide-x-forwarded-headers",
                  },
                  {
                    text: "Set X-Forwarded Headers",
                    link: "/Middlewares.md#set-x-forwarded-headers",
                  },
                ],
              },
            ],
          },
          {
            text: "Notifications",
            link: "/Notifications.md",
          },
          {
            text: "Load Balancing",
            link: "/Load-Balancing.md",
          },
          {
            text: "Rule Based Routing",
            link: "/Rule-Based-Routing.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yusing/godoxy" },
      { icon: "discord", link: "https://discord.gg/invite/umReR62nRd" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Yusing",
    },
  },
});
