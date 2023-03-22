import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import ServerConfig from './config/server_config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ServerConfig.port);
}
bootstrap();
