"use client";

import { createOpenAPIPage } from "fumadocs-openapi/ui";
import { mediaAdapters } from "@/lib/media-adapter";

export const APIPage = createOpenAPIPage({
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
  mediaAdapters,
});
