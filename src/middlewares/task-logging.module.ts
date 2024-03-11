import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TaskLoggingMiddleware } from './task-logging.middleware';

@Module({})
export class TaskLoggingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TaskLoggingMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
