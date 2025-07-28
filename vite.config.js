import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hypecon/',  // GitHub Pages 서브패스
  build: {
    outDir: 'docs'
  }
})
