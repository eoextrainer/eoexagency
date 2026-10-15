import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Serves /eoexagency/landing (no extension) as landing.html in dev and preview
function landingRoutePlugin() {
  const rewrite = (req, _res, next) => {
    if (req.url === '/eoexagency/landing' || req.url === '/eoexagency/landing/') {
      req.url = '/eoexagency/landing.html'
    }
    next()
  }
  return {
    name: 'landing-clean-url',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'public'),
  plugins: [react(), landingRoutePlugin()],
  base: '/eoexagency/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'res/build',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        landing: path.resolve(__dirname, 'src/landing.html'),
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
})
