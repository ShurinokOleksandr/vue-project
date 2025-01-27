import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
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
  plugins: [
    vueDevTools(),
    createHtmlPlugin({}),
    vue(),
    vueJsx(),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  }
})
