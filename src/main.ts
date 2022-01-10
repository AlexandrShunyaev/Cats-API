import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';

async function bootstrap() {
  config.update({
    accessKeyId: 'AKIARRX4CPY3XNEK6X4Z',
    secretAccessKey: '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',
    region: 'eu-central-1',
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
