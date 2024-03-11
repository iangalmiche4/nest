import { Injectable } from '@nestjs/common';
import { TaskService } from '../TaskService/task.service';

@Injectable()
export class StatisticService {
  constructor(private readonly taskService: TaskService) {}

  async getStatistics(): Promise<any> {
    const tasks = await this.taskService.getAllTasks();
    const tasksCreated = tasks.length;
    const tasksCompleted = tasks.filter(task => task.status === 'DONE').length;
    return { tasksCreated, tasksCompleted };
  }
}
