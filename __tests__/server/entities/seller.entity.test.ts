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

const storeName = 'cupcakes market'

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

describe('SellerEntity', () => {
    it('should create a SellerEntity instance and assign properties correctly', async () => {
        const sellerRepository = testDataSource.getRepository(SellerEntity)

        const seller = new SellerEntity()
        seller.storeName = storeName

        const savedSeller = await sellerRepository.save(seller)

        expect(savedSeller.storeName).toBe(storeName)
    })
})
