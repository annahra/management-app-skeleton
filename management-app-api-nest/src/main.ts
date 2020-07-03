import { Seeder } from './database/seeder';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  NestFactory.create(AppModule).then(async app => {
    app.enableCors();

    let seeder = app.get(Seeder);
    await seeder.seed();

    await app.listen(5000);
  });
}
bootstrap();
