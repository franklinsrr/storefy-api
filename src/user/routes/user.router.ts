import { UserController } from '@user/controllers/user.controller'
import { BaseRouter } from '@shared/routers/router'

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
