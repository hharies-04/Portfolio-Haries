import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-tap-v2.js`,
        chunkFileNames: `assets/[name]-tap-v2.js`,
        assetFileNames: `assets/[name]-tap-v2.[ext]`
      }
    }
  }
})
