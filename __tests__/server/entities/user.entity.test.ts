import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { DataSource } from 'typeorm'
import { UserEntity } from '../../../src/user/entities/user.entity'
import { USER_TYPES } from '../../../src/constants/user'
import { ConfigTestServer } from '../config/configTest'

let testDataSource: DataSource

const config = new ConfigTestServer()

beforeAll(async () => {
    testDataSource = new DataSource({
        ...config.typeORMConfig,
        entities: [UserEntity],
    })

    await testDataSource.initialize()
})

afterAll(async () => {
    await testDataSource.destroy()
})

describe('UserEntity', () => {
    it('should create a UserEntity instance and assign properties correctly', async () => {
        const userRepository = testDataSource.getRepository(UserEntity)

        const user = new UserEntity()
        user.username = 'testuser'
        user.firstName = 'Test'
        user.lastName = 'User'
        user.password = 'password123'
        user.userType = USER_TYPES[1]
        user.phone = '123456789'
        user.email = 'testuser@example.com'

        const savedUser = await userRepository.save(user)

        expect(savedUser.username).toBe('testuser')
        expect(savedUser.firstName).toBe('Test')
        expect(savedUser.lastName).toBe('User')
        expect(savedUser.password).toBe('password123')
        expect(savedUser.userType).toBe(USER_TYPES[1])
        expect(savedUser.phone).toBe('123456789')
        expect(savedUser.email).toBe('testuser@example.com')
    })
})
