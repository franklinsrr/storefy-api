import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { DataSource } from 'typeorm'
import { CategoryEntity } from '../../../src/category/entities/category.entity'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const name = 'shoes'
const description = 'shoes category'

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        entities: [CategoryEntity],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
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
