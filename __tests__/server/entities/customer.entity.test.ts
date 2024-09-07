import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { DataSource } from 'typeorm'
import { CustomerEntity } from '../../../src/customer/entities/customer.entity'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const address = '177A Bleecker Street, Greenwich Village, Nueva York'

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        entities: [CustomerEntity],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
})

describe('CustomerEntity', () => {
    it('should create a CustomerEntity instance and assign properties correctly', async () => {
        const customerRepository = testDataSource.getRepository(CustomerEntity)

        const customer = new CustomerEntity()
        customer.address = address

        const savedCustomer = await customerRepository.save(customer)

        expect(savedCustomer.address).toBe(address)
    })

    it('should create a CustomerEntity without address instance and assign properties correctly', async () => {
        const customerRepository = testDataSource.getRepository(CustomerEntity)

        const customer = new CustomerEntity()

        const savedCustomer = await customerRepository.save(customer)

        expect(savedCustomer.address).toBeNull()
    })
})
