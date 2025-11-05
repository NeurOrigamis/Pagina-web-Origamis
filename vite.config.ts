import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Pag-na-web-Origamis/',  // 👈 nombre exacto del repositorio en GitHub
  build: { outDir: 'docs' },      // 👈 carpeta donde se guardará el build para GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
