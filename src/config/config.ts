import * as dotenv from 'dotenv'
import { DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export abstract class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv || 'development')
        dotenv.config({
            path: [nodeNameEnv, '.env'],
        })
    }

    public getEnvironment(key: string): string | undefined {
        return process.env[key] // process.env.['PORT']
    }

    public getNumberEnv(key: string) {
        return Number(this.getEnvironment(key))
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || ''
    }

    public createPathEnv(path: string): string {
        return '.env.' + path + '.local'
    }

    public get typeORMConfig(): DataSourceOptions {
        return {
            type: 'mysql',
            host: this.getEnvironment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnvironment('MYSQL_USER'),
            password: this.getEnvironment('MYSQL_PASSWORD'),
            database: this.getEnvironment('MYSQL_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }
}
