import { defineConfig } from 'vitest/config'

import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@controllers': path.resolve(__dirname, 'src/controllers'),
            '@routers': path.resolve(__dirname, 'src/routers'),
            // Añade más alias según los necesites
        },
    },
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
})
