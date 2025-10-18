import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: command === 'serve' ? '/' : '/react-pokemon-zukan/',
}));

