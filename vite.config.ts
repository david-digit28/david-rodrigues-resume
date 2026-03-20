import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['@google/genai']
  },
  define: {
    'process.env.API_KEY': JSON.stringify('AIzaSyBTqDsIlwd20mEXUqiXtNj6wV9YUmWFg0o')
  }
});
