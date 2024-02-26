import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestCountMiddleware implements NestMiddleware {
  private requestCount = 0;

  use(req: any, res: any, next: () => void) {
    this.requestCount++;
    console.log(`Nombre de requêtes effectuées: ${this.requestCount}`);
    next();
  }
}
