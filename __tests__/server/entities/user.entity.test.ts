import { describe, it, expect } from 'vitest'
import { USER_TYPES } from '../../../src/shared/constants/user'
import { UserEntity } from './imports'
import { testDataSource } from '../run'

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

    it('should create a UserEntity without password instance and assign properties correctly', async () => {
        const userRepository = testDataSource.getRepository(UserEntity)

        const user = new UserEntity()
        user.username = 'testuser'
        user.firstName = 'Test'
        user.lastName = 'User'
        user.userType = USER_TYPES[1]
        user.phone = '123456789'
        user.email = 'testuser@example.com'

        const savedUser = await userRepository.save(user)

        expect(savedUser.username).toBe('testuser')
        expect(savedUser.firstName).toBe('Test')
        expect(savedUser.lastName).toBe('User')
        expect(savedUser.password).toBeNull()
        expect(savedUser.userType).toBe(USER_TYPES[1])
        expect(savedUser.phone).toBe('123456789')
        expect(savedUser.email).toBe('testuser@example.com')
    })
})
