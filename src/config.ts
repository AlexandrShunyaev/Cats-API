import { ConnectionOptions } from "typeorm"
import { Cat } from './cats/cat-entity';

export const Config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Cat],
  synchronize: false,
  //autoLoadEntities: true,
  migrations: ['dist/src/catsDB/migrations/*.js'],
  cli: {migrationsDir: 'src/catsDB/migrations'},
  migrationsTransactionMode: 'each'
};

module.exports = Config;

