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

const quantity = 20
const totalPrice = 20.303
const date = new Date()

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

describe('SaleEntity', () => {
    it('should create a SaleEntity instance and assign properties correctly', async () => {
        const saleRepository = testDataSource.getRepository(SaleEntity)

        const sale = new SaleEntity()
        sale.quantity = quantity
        sale.totalPrice = totalPrice
        sale.saleDate = date

        const savedSale = await saleRepository.save(sale)

        expect(savedSale.quantity).toBe(quantity)
        expectTypeOf(savedSale.quantity).toBeNumber()
        expect(savedSale.totalPrice).toBe(totalPrice)
        expectTypeOf(savedSale.totalPrice).toBeNumber()
        expect(savedSale.saleDate).toBe(date)
    })
})
