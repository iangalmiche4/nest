import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  addTask(@Body() task: Task) {
    return this.taskService.addTask(task);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: Task): Task {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return { deleted: true };
  }
}
