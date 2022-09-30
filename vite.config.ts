import { defineConfig } from 'vite'
import {adorableCSS} from 'adorable-css/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [adorableCSS(), react()]
})
