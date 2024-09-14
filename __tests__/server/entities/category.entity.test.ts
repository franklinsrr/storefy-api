import { describe, it, expect } from 'vitest'
import { CategoryEntity } from './imports'
import { testDataSource } from '../run'

const name = 'shoes'
const description = 'shoes category'

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
