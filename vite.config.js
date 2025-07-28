import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // 커스텀 도메인 사용 시 루트 경로로 설정
  build: {
    outDir: 'docs'
  }
})
