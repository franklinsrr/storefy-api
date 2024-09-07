import { describe, it, expect, vi } from 'vitest'
import { Request, Response } from 'express'
import { UserRouter } from '../../../src/user/routes/user.router'
import { UserController } from '../../../src/user/controllers/user.controller'

vi.mock('../src/controllers/user.controller')

describe('UserRouter', () => {
    it('debería manejar la ruta GET /users', () => {
        const mockRequest = {} as Request
        const mockResponse = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response

        const userController = new UserController()
        const userRouter = new UserRouter()

        vi.spyOn(userController, 'getUser').mockImplementation((req, res) => {
            res.status(200).json({ user: 'franklin rodriguez' })
        })

        userRouter['controller'].getUser(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledWith(200)
        expect(mockResponse.json).toHaveBeenCalledWith({
            user: 'franklin rodriguez',
        })
    })
})
