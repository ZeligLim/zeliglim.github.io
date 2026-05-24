import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// User site (zeliglim.github.io) is served at the domain root — base must be '/'.
// Use '/repo-name/' only for project pages (e.g. github.io/personalwebsite).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
