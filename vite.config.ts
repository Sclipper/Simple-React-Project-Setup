// Ignore this error for now
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import svgr from 'vite-plugin-svgr'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), svgr(), viteCommonjs()],
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
  // resolve: {
  //   alias: {
  //     components: "/src/components",
  //     configs: "/src/configs",
  //     pages: "/src/pages",
  //     services: "/src/services",
  //     assets: "/src/assets",
  //     types: "/src/types",
  //   },
  // },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "@scss/shared.scss";'
  //     }
  //   }
  // },
  server: {
    port: 3000,
  },
  base: '',
})
