import { defineConfig } from 'vitest/config'

import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@controllers': path.resolve(__dirname, 'src/controllers'),
            '@routers': path.resolve(__dirname, 'src/routers'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@user': path.resolve(__dirname, 'src/user'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
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
