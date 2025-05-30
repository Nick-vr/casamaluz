// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: 'server',
  adapter: vercel(),
})
