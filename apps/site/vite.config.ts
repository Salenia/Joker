import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import svg from 'vite-plugin-solid-svg';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin(), svg()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@assets': resolve('assets'),
      '@components': resolve('src/components'),
      '@router': resolve('src/router'),
    }
  }
});
