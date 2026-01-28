import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build output
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Use esbuild for faster minification (default)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Better chunk splitting for production
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  // Ensure proper base path for deployment
  base: '/',
})
