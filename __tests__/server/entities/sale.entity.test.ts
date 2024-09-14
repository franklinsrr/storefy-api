import { describe, it, expect, expectTypeOf } from 'vitest'
import { SaleEntity } from './imports'
import { testDataSource } from '../run'

const quantity = 20
const totalPrice = 20.303
const date = new Date()

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
