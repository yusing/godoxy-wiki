import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const root = path.dirname(fileURLToPath(import.meta.url));
console.log("root", root);

/** @type {import('next').NextConfig} */
const config = {
  allowedDevOrigins: ['10.0.20.1'],
  reactStrictMode: true,
  turbopack: {
    root,
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
};

export default withMDX(config);
