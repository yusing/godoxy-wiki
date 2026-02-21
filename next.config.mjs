import { createMDX } from "fumadocs-mdx/next";
import path from "path";

const withMDX = createMDX();

const root = path.resolve(__dirname, "..");
console.log("root", root);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://img.shields.io/github/v/release/**?style=flat-square"),
    ],
    dangerouslyAllowSVG: true,
  },
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
