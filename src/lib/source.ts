import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader, multiple } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { openapiPlugin, openapiSource } from "fumadocs-openapi/server";
import { openapi } from "@/lib/openapi";
import { gitConfig } from "./layout.shared";
import { getSection } from "./source/navigation";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader(
  multiple({
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      baseDir: "openapi/(generated)",
    }),
  }),
  {
    baseUrl: "/docs",
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
);

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  if (page.data.type === "openapi") {
    return JSON.stringify(page.data.getSchema().bundled, null, 2);
  }

  const section = getSection(page.slugs[0]);
  const category =
    {
      godoxy: "GoDoxy",
      impl: "GoDoxy Implementation",
    }[section] ?? section;

  const processed = await page.data.getText("processed");

  return `# ${category}: ${page.data.title}
URL: ${page.url}
Source: https://raw.githubusercontent.com/${gitConfig.user}/${gitConfig.repo}-wiki/refs/heads/main/content/docs/${page.path}

${page.data.description ?? ""}

${processed}`;
}
