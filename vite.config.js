import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/jayakodykavishka/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  define: {
    __BASE_URL__: JSON.stringify(process.env.NODE_ENV === 'production' ? '/jayakodykavishka/' : '/')
  }
})
