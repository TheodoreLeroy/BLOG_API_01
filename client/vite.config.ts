import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tailwindcss()],
    build: {
        sourcemap: true // create source map when build
    },
    server: {
        port: 53596,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@admin': path.resolve(__dirname, './src/pages/admin'),
            '@services': path.resolve(__dirname, './src/services'),
            '@layouts': path.resolve(__dirname, './src/components/layouts'),
            
        }
    }
})
