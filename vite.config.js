import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Adjust this if your app is in a subdirectory
  plugins: [react()],
})
