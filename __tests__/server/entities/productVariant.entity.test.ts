import { describe, it, expect, beforeAll, afterAll } from 'vitest'
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

const color = 'black'
const size = 's'
const stock = 20

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
