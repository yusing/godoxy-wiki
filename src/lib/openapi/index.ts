import { resolve } from "node:path";
import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  // the OpenAPI schema, you can also give it an external URL.
  input: [resolve("./public/api.json")],
});
