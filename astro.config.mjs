import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thunderbandit27.github.io',
  server: {
    port: parseInt(process.env.PORT || '4321'),
  },
});
