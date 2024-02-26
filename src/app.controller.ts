import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleService } from './services/ExampleService/example.service';
import { DatabaseService } from './services/DatabaseService/database.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly exampleService: ExampleService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('example')
  getExample(): string {
    return this.exampleService.getExample();
  }

  @Get('database-config')
  getDatabaseConfig() {
    return this.databaseService.getDatabaseConfig();
  }
}
