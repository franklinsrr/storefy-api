import { describe, it, expect, expectTypeOf } from 'vitest'
import { ProductEntity } from './imports'
import { testDataSource } from '../run'

const name = 'shoes'
const description = 'a fashion shoes for men'
const price = 2.34

describe('SellerEntity', () => {
    it('should create a ProductEntity instance and assign properties correctly', async () => {
        const productRepository = testDataSource.getRepository(ProductEntity)

        const product = new ProductEntity()
        product.name = name
        product.description = description
        product.price = price

        const savedProduct = await productRepository.save(product)

        expect(savedProduct.name).toBe(name)
        expect(savedProduct.description).toBe(description)
        expectTypeOf(savedProduct.price).toBeNumber()
    })
})
