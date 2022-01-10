import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
