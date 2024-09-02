import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

export class ServerBootstrap {
    public app: express.Application = express()
    private port: number = 8000

    constructor() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(helmet())
        this.listen()
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('server running on port => ', this.port)
        })
    }
}

new ServerBootstrap()
