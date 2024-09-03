import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from '@routers/user.router'

export class ServerBootstrap {
    public app: express.Application = express()
    private readonly port: number = 8000

    constructor() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(helmet())

        this.app.use('/api/v1', this.routers())

        this.listen()
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router]
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('server running on port: ', this.port)
        })
    }
}

new ServerBootstrap()
