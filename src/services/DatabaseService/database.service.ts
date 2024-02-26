import { Injectable } from '@nestjs/common';

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

@Injectable()
export class DatabaseService {
  private config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  getDatabaseConfig(): DatabaseConfig {
    return this.config;
  }
}
