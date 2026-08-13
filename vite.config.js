import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        target: 'es2020',
        cssMinify: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                focus: resolve(__dirname, 'focus.html'),
                checklist: resolve(__dirname, 'checklist.html')
            }
        }
    },
    esbuild: {
        drop: ['console', 'debugger']
    }
})
