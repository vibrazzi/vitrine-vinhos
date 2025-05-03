import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // Base URL para o projeto (ajuste conforme necessário para deploy)
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias para o diretório src
    },
  },
  server: {
    port: 5173, // Porta padrão para o servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
  },
  build: {
    outDir: 'dist', // Diretório de saída para arquivos de produção
    sourcemap: true, // Gera sourcemaps para facilitar o debug
  },
});