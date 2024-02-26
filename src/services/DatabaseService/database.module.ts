import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService, DatabaseConfig } from './database.service';

@Module({})
export class DatabaseModule {
  static register(config: DatabaseConfig): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: DatabaseService,
          useValue: new DatabaseService(config),
        },
      ],
      exports: [DatabaseService],
    };
  }
}
