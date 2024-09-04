import { UserController } from '@controllers/user.controller'
import { BaseRouter } from '@routers/router'

export class UserRouter extends BaseRouter<UserController> {
    constructor() {
        super(UserController)
    }

    routes(): void {
        this.router.get('/users', (req, res) =>
            this.controller.getUser(req, res)
        )
    }
}
