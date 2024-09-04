import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from '@routers/user.router'
import { ConfigServer } from '@config/config'
import { DataSource } from 'typeorm'

export class ServerBootstrap extends ConfigServer {
    public app: express.Application = express()
    private readonly port: number = this.getNumberEnv('PORT') || 8000

    constructor() {
        super()

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.dbConnect()
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(helmet())

        this.app.use('/api/v1', this.routers())

        this.listen()
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router]
    }

    async dbConnect() {
        await new DataSource(this.typeORMConfig).initialize()
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('server running on port: ', this.port)
        })
    }
}

new ServerBootstrap()
