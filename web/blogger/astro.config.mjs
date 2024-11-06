// @ts-check
import { defineConfig } from 'astro/config'
import { murypAstroMinify, ViteMurypJsLiteral } from '@muryp/vite-html'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      ViteMurypJsLiteral({
        minify: {
          css: false,
          html: false,
        },
      }),
    ],
  },
  integrations: [
    tailwind(),
  ],
})