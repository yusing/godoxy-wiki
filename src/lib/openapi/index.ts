import { createOpenAPI } from 'fumadocs-openapi/server';
import {resolve} from 'node:path';

export const openapi = createOpenAPI({
  // the OpenAPI schema, you can also give it an external URL.
  input: [resolve('./public/api.json')],
});