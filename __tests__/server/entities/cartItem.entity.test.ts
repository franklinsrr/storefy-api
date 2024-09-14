import { describe, it, expect, expectTypeOf } from 'vitest'
import { CartItemEntity } from './imports'
import { testDataSource } from '../run'

const quantity = 20

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
