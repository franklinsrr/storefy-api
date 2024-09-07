import { describe, it, expect, beforeAll, afterAll, expectTypeOf } from 'vitest'
import { DataSource } from 'typeorm'
import { SaleEntity } from '../../../src/sale/entities/sale.entity'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const quantity = 20
const totalPrice = 20.303
const date = new Date()

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        entities: [SaleEntity],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
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
