import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        lang: 'ja',
        name: 'Zenb',
        short_name: 'Zenb',
        background_color: '#fff',
        theme_color: '#6C36A3',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
        ]
      },
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any"
    })
  ],
  base: '/',
  build: {
    outDir: 'docs'
  },
  server: {
    hmr: {
      protocol: 'wss',
      port: 443
    }
  }
})