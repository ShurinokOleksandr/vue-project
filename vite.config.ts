import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vueDevTools(),
    createHtmlPlugin({}),
    vue(),
  ],
})