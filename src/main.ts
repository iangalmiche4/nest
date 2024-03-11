import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TaskLoggingMiddleware } from './middlewares/task-logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new TaskLoggingMiddleware().use);
  await app.listen(3000);
}
bootstrap();
