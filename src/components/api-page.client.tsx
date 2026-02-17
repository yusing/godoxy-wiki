"use client";

import { defineClientConfig } from "fumadocs-openapi/ui/client";
import { mediaAdapters } from "@/lib/media-adapter";

const clientConfig = defineClientConfig({
  // client-side config
  mediaAdapters,
});

export default clientConfig;
