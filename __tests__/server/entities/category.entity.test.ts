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

const name = 'shoes'
const description = 'shoes category'

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

describe('CategoryEntity', () => {
    it('should create a CategoryEntity instance and assign properties correctly', async () => {
        const categoryRepository = testDataSource.getRepository(CategoryEntity)

        const category = new CategoryEntity()
        category.name = name
        category.description = description

        const savedCategory = await categoryRepository.save(category)

        expect(savedCategory.name).toBe(name)
        expect(savedCategory.description).toBe(description)
    })
})
