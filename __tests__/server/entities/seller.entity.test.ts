import { describe, it, expect } from 'vitest'
import { SellerEntity } from './imports'
import { testDataSource } from '../run'

const storeName = 'cupcakes market'

describe('SellerEntity', () => {
    it('should create a SellerEntity instance and assign properties correctly', async () => {
        const sellerRepository = testDataSource.getRepository(SellerEntity)

        const seller = new SellerEntity()
        seller.storeName = storeName

        const savedSeller = await sellerRepository.save(seller)

        expect(savedSeller.storeName).toBe(storeName)
    })
})
