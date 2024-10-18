import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import myPlugin from "./vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), myPlugin()],
  base: "/snowby-blog/",
})
