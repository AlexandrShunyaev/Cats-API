import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Cat } from './cats/cat-entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '123',
  port: 5432,
  host: 'localhost',
  database: 'catsDB',
  entities: [Cat],
  synchronize: true,
  autoLoadEntities: true,
};
