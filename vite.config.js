import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/parlemoi-site/' : '/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
  },
})
