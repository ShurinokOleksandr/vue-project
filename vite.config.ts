import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwind from "@tailwindcss/vite";
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

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
