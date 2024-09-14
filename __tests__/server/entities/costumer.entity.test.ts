import { describe, it, expect } from 'vitest'
import { CostumerEntity } from './imports'
import { testDataSource } from '../run'

const address = '177A Bleecker Street, Greenwich Village, Nueva York'

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
