import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rodogeek-com.github.io',
  base: '/collaboration-training-center',
  integrations: [sitemap()],
  output: 'static'
});
