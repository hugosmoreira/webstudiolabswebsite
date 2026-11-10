import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const root = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Real HTML files per page, so unknown URLs get the 404 page instead of the homepage.
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        privacy: resolve(root, 'privacy/index.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
})
