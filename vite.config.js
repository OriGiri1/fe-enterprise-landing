import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Hỗ trợ deploy GitHub Pages không bị lỗi đường dẫn assets
  server: {
    port: 3000,
    open: true
  }
});
