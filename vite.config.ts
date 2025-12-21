import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Prevent Vite from trying to pre-bundle this since it comes from CDN
    exclude: ['@google/genai']
  },
  build: {
    rollupOptions: {
      // Critical: This tells the build tool "Do not look for this package in node_modules"
      external: ['@google/genai'],
      output: {
        // This ensures the import in the final bundle points to the global variable or keeps the import path intact
        // for the browser's import map to handle.
        globals: {
          '@google/genai': 'GoogleGenAI'
        }
      }
    }
  }
});
