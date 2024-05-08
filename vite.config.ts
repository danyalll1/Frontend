import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  base:  '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@global': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/components/ui-components', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "@global/app.scss";`,
      }
    }
  },
  server:{
    port:8081
  }
})
