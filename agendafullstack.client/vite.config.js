import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
           
            '/api': {
                target: 'https://localhost:7168', 
                secure: false,
                changeOrigin: true
            }
        },
        port: 5173 
    }
});