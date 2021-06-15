import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess({ postcss: true }),
        }),
        process.env.NODE_ENV === 'production' && viteSingleFile(),
    ],
    // NOTE: base path doesn't work with vite-plugin-singlefile.
    // base: '/svelte-encrypted-weather/',
    build: {
        outDir: 'build',
        target: 'es2019',
        assetsInlineLimit: 100000000,
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false,
        sourcemap: false,
        brotliSize: false,
        rollupOptions: {
            inlineDynamicImports: true,
            output: {
                manualChunks: () => 'everything.js',
            },
        },
    },
})
