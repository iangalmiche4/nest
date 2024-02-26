import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './services/ExampleService/example.module';
import { DatabaseModule } from './services/DatabaseService/database.module';
import { RequestCountMiddleware } from './middlewares/request-count.middleware';

@Module({
  imports: [
    DatabaseModule.register({
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
    }),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestCountMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
