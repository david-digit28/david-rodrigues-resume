import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      // Custom plugin to force external resolution for @google/genai
      // This bypasses the standard node_modules check which is failing the build
      name: 'force-external-google-genai',
      resolveId(id) {
        if (id === '@google/genai') {
          return { id, external: true };
        }
        return null;
      }
    }
  ],
  optimizeDeps: {
    exclude: ['@google/genai']
  },
  build: {
    rollupOptions: {
      external: ['@google/genai'],
      output: {
        globals: {
          '@google/genai': 'GoogleGenAI'
        }
      }
    }
  }
});
