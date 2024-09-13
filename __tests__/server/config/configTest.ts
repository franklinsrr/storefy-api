import { DataSourceOptions } from 'typeorm'
import { ConfigServer } from '../../../src/config/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export class ConfigTestServer extends ConfigServer {
    public get typeORMConfig(): DataSourceOptions {
        return {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3313,
            username: 'franklinserif',
            password: '12345678',
            database: 'storefy_db_test',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }
}
