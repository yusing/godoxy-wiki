import { openapi } from '@/lib/openapi';
import { createAPIPage } from 'fumadocs-openapi/ui';
import client from './api-page.client';
import { mediaAdapters } from '@/lib/media-adapter';

export const APIPage = createAPIPage(openapi, {
  client,
  shikiOptions: {
    themes: {
      dark: 'vesper',
      light: 'vitesse-light',
    },
  },
  mediaAdapters,
});
