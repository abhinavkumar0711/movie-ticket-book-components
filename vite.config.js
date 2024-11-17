import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, "./src/index.js"),
      name: 'movie-ticket-booking-components',
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },  
    emptyOutDir: true,
  },
})
