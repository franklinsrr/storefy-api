import { afterAll, beforeAll } from 'vitest'
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
} from './entities/imports'
import { ConfigTestServer } from './config/configTest'
import { DataSource } from 'typeorm'

export let testDataSource: DataSource

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
    if (testDataSource.isInitialized) {
        await testDataSource.destroy()
    }
})
