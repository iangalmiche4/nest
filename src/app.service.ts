import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): any {
    return {
      application: "Task Management System",
      version: "1.0.0",
    };
  }
}

