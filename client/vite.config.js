import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  server: {
    proxy: {
      "/api": "https://cricblog-backend.onrender.com",
      // Uncomment the line below to use a local backend server during development
      // "/api": "http://localhost:5000"
    }
  }
  });

