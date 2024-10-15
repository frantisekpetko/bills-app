import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { Logger } from '@nestjs/common';
import { ServerModule } from 'src/server/server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const logger = new Logger('main.ts');
  const port = process.env.PORT || 8000;

  await app.listen(port, () => logger.log(`App was started at port ${port}`));
}
bootstrap();
