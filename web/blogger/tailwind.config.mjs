import { theme, plugins } from 'configs/tailwind/config'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/ui/src/**/*.ts','./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme,
  plugins,
}