import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './services/DatabaseService/database.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get('database-config')
  getDatabaseConfig() {
    return this.databaseService.getDatabaseConfig();
  }
}
