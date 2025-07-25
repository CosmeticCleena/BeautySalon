import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'


// Get the directory name equivalent to __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'img': path.resolve(__dirname, './src/public/img')
    }
  },
  server: {
    port:  5173, 
    host: "0.0.0.0" 
  },preview: {
    port: 5173,
    host: "0.0.0.0",
    allowedHosts: ["beautysalon-4.onrender.com"]
  }
})
