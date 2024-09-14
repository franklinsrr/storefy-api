import { describe, it, expect, beforeAll, afterAll, expectTypeOf } from 'vitest'
import { DataSource } from 'typeorm'
import {
    CostumerEntity,
    ProductEntity,
    SellerEntity,
    CategoryEntity,
    ProductVariantEntity,
    ImageEntity,
    UserEntity,
    CartItemEntity,
    CartEntity,
    SaleEntity,
} from './imports'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const quantity = 20

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        dropSchema: true,
        entities: [
            CostumerEntity,
            ProductEntity,
            SellerEntity,
            CategoryEntity,
            ProductVariantEntity,
            ImageEntity,
            UserEntity,
            CartItemEntity,
            CartEntity,
            SaleEntity,
        ],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    if (testDataSource.isInitialized) {
        await testDataSource.destroy()
    }
})

describe('CartItemEntity', () => {
    it('should create a CartItemEntity instance and assign properties correctly', async () => {
        const cartItemRepository = testDataSource.getRepository(CartItemEntity)

        const cartItem = new CartItemEntity()
        cartItem.quantity = quantity

        const savedCartItem = await cartItemRepository.save(cartItem)

        expect(savedCartItem.quantity).toBe(quantity)
        expectTypeOf(savedCartItem.quantity).toBeNumber()
    })
})
