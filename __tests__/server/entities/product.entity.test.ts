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

const name = 'shoes'
const description = 'a fashion shoes for men'
const price = 2.34

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
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
    await testDataSource.destroy()
})

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
