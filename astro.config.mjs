import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://thunderbandit27.github.io',

  server: {
    port: parseInt(process.env.PORT || '4321'),
  },

  output: "hybrid",
  adapter: cloudflare()
});