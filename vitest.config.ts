import { defineConfig } from 'vitest/config'

import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@config': path.resolve(__dirname, 'src/config'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@user': path.resolve(__dirname, 'src/user'),
            '@seller': path.resolve(__dirname, 'src/seller'),
            '@costumer': path.resolve(__dirname, 'src/costumer'),
            '@cart': path.resolve(__dirname, 'src/cart'),
            '@cartItem': path.resolve(__dirname, 'src/cartItem'),
            '@product': path.resolve(__dirname, 'src/product'),
            '@productVariant': path.resolve(__dirname, 'src/productVariant'),
            '@image': path.resolve(__dirname, 'src/image'),
            '@sale': path.resolve(__dirname, 'src/sale'),
            '@category': path.resolve(__dirname, 'src/category'),
        },
    },
    test: {
        setupFiles: './__tests__/server/run.ts',
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
})
