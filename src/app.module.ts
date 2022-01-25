import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { Config } from './config'
import {Cat} from "./cats/cat-entity";
import { GraphQLModule, } from '@nestjs/graphql';


@Module({

  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Cat],
      synchronize: true,
      autoLoadEntities: true
      /*migrations: ['dist/src/catsDB/migrations/!*.js'],
      cli: {migrationsDir: 'src/catsDB/migrations'}*/,}
    ), CatsModule]
})
export class AppModule {}
