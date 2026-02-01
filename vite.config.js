import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './', // Works for both Vercel (root) and GitHub Pages (subdir)
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                focus: resolve(__dirname, 'focus.html'),
                checklist: resolve(__dirname, 'checklist.html'),
                comparison: resolve(__dirname, 'comparison.html')
            }
        }
    }
})
