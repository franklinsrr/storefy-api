import { Request, Response } from 'express'

export class UserController {
    getUser(_: Request, res: Response) {
        res.status(200).json({ user: 'franklin rodriguez' })
    }
}
