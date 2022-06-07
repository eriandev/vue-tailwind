import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(dirname, 'src/components'),
      '@routes': path.resolve(dirname, 'src/routes'),
      '@utils': path.resolve(dirname, 'src/utils'),
      '@store': path.resolve(dirname, 'src/store'),
      '@views': path.resolve(dirname, 'src/views'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
