import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';

@Injectable()
export class TaskLoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const logger = new Logger('TaskLoggingMiddleware');
    const start = Date.now();
    const { method, originalUrl } = req;

    res.on('finish', () => {
      const { statusCode } = res;
      const end = Date.now() - start;
      logger.log(`${method} ${originalUrl} ${statusCode} - ${end}ms`);

      // Conditionally log based on URL and method
      if (originalUrl.includes('/tasks') && method === 'POST') {
        logger.log('Nouvelle tâche créée');
      } else if (originalUrl.includes('/tasks') && method === 'PUT') {
        logger.log('Tâche mise à jour');
      } else if (originalUrl.includes('/tasks') && method === 'GET') {
        logger.log('Liste des tâches');
      } else if (originalUrl.includes('/tasks') && method === 'DELETE') {
        logger.log('Tâche supprimée');
      }
    });

    next();
  }
}
