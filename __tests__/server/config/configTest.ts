import { DataSourceOptions } from 'typeorm'
import { ConfigServer } from '../../../src/config/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export class ConfigTestServer extends ConfigServer {
    public get typeORMConfig(): DataSourceOptions {
        return {
            type: 'mysql',
            host: this.getEnvironment('DB_HOST'),
            port: this.getNumberEnv('DB_TEST_PORT'),
            username: this.getEnvironment('MYSQL_USER'),
            password: this.getEnvironment('MYSQL_PASSWORD'),
            database: this.getEnvironment('MYSQL_TEST_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }
}
