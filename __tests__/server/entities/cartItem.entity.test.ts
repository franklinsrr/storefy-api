import { describe, it, expect, beforeAll, afterAll, expectTypeOf } from 'vitest'
import { DataSource } from 'typeorm'
import { CartItemEntity } from '../../../src/cartItem/entities/cartItem.entity'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const quantity = 20

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        entities: [CartItemEntity],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
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
