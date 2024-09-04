import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as dotenv from 'dotenv'
import { ConfigServer } from '../../../config/config' // Asegúrate de que esta ruta es correcta

// Mock dotenv.config
vi.mock('dotenv', () => ({
    config: vi.fn(),
}))

// Mock process.env
const mockEnv = {
    NODE_ENV: 'development',
    PORT: '8000',
}

beforeEach(() => {
    vi.clearAllMocks()
    process.env = { ...mockEnv }
})

describe('ConfigServer', () => {
    it('should initialize with the correct dotenv path', () => {
        class TestConfigServer extends ConfigServer {}
        new TestConfigServer()

        expect(dotenv.config).toHaveBeenCalledWith({
            path: ['.env.development.local', '.env'],
        })
    })

    it('should return the correct environment variable value', () => {
        class TestConfigServer extends ConfigServer {}
        const configServer = new TestConfigServer()

        expect(configServer.getEnvironment('NODE_ENV')).toBe('development')
        expect(configServer.getEnvironment('PORT')).toBe('8000')
    })

    it('should return the correct number from the environment variable', () => {
        class TestConfigServer extends ConfigServer {}
        const configServer = new TestConfigServer()

        expect(configServer.getNumberEnv('PORT')).toBe(8000)
    })

    it('should return the correct node environment', () => {
        class TestConfigServer extends ConfigServer {}
        const configServer = new TestConfigServer()

        expect(configServer.nodeEnv).toBe('development')
    })

    it('should create the correct path for env files', () => {
        class TestConfigServer extends ConfigServer {}
        const configServer = new TestConfigServer()

        expect(configServer.createPathEnv('production')).toBe(
            '.env.production.local'
        )
    })
})
