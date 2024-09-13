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

const address = '177A Bleecker Street, Greenwich Village, Nueva York'

const config = new ConfigTestServer().typeORMConfig

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config,
        synchronize: true,
        entities: [
            ProductEntity,
            SellerEntity,
            CategoryEntity,
            ProductVariantEntity,
            ImageEntity,
            UserEntity,
            CartItemEntity,
            CartEntity,
            SaleEntity,
            CostumerEntity,
        ],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
})

describe('CostumerEntity', () => {
    it('should create a CostumerEntity instance and assign properties correctly', async () => {
        const costumerRepository = testDataSource.getRepository(CostumerEntity)

        const costumer = new CostumerEntity()
        costumer.address = address

        const savedCostumer = await costumerRepository.save(costumer)

        expect(savedCostumer.address).toBe(address)
    })

    it('should create a CostumerEntity without address instance and assign properties correctly', async () => {
        const costumerRepository = testDataSource.getRepository(CostumerEntity)

        const costumer = new CostumerEntity()

        const savedCostumer = await costumerRepository.save(costumer)

        expect(savedCostumer.address).toBeNull()
    })
})
