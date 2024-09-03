import * as dotenv from 'dotenv'

export abstract class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv || 'development')
        dotenv.config({
            path: nodeNameEnv,
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
}
