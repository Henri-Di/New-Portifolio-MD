import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT ?? '10000'),
    strictPort: true,
    watch: {
      usePolling: true,
    },
    proxy: mode === 'development' ? {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    } : undefined,
  },
}))