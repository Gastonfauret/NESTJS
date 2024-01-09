import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // stopAtFirstError: true,
    // whitelist: true,
    // disableErrorMessages: true,
    // errorHttpStatusCode: 406
  }));
  await app.listen(3000);
}

bootstrap();

//Page 92 - Trabajo con Bases de datos en nest Framework.
