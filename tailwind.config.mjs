import { theme, plugins } from 'configs/tailwind/config'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pkgs/ui/src/**/*.{ts}'],
  theme,
  plugins,
}