import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.js'
  }
})

optimizeDeps: {
  include: ["@mui/material", "@emotion/react", "@emotion/styled"]
}