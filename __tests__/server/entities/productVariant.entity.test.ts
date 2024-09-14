import { describe, it, expect } from 'vitest'
import { ProductVariantEntity } from './imports'
import { testDataSource } from '../run'

const color = 'black'
const size = 's'
const stock = 20

describe('ProductVariantEntity', () => {
    it('should create a ProductVariantEntity instance and assign properties correctly', async () => {
        const productVariantRepository =
            testDataSource.getRepository(ProductVariantEntity)

        const productVariant = new ProductVariantEntity()
        productVariant.color = color
        productVariant.size = size
        productVariant.stock = stock

        const savedProductVariant =
            await productVariantRepository.save(productVariant)

        expect(savedProductVariant.color).toBe(color)
        expect(savedProductVariant.size).toBe(size)
        expect(savedProductVariant.stock).toBe(stock)
    })
})
