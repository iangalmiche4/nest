import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './services/TaskService/task.module';
import { DatabaseModule } from './services/DatabaseService/database.module';
import { StatisticModule } from './services/statisticService/statistic.module';
import { TaskLoggingModule } from './middlewares/task-logging.module';

@Module({
  imports: [
    DatabaseModule.register({
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
    }),
    TaskModule,
    TaskLoggingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'views'),
    }),
    StatisticModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
