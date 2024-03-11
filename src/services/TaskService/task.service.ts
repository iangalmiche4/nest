import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task {
    task.id = uuidv4(); // Génère un ID unique pour chaque nouvelle tâche
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: string, task: Task): Task {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index > -1) {
      this.tasks[index] = { ...this.tasks[index], ...task };
      return this.tasks[index];
    }
    return null;
  }

  deleteTask(id: string): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
