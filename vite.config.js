import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// 환경에 따른 base 설정
const isGitHubPages = process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true';
// 커스텀 도메인 사용 시 base를 '/'로 설정
const base = isGitHubPages ? '/' : '/';

// https://vite.dev/config/
export default defineConfig({
  base: base,
  build: { 
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
