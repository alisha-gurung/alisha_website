import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alisha-gurung.github.io',
  base: '/alisha_website',
  integrations: [tailwind()],
});
