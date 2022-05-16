// nest g controller tasks --no-spec
import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    // this.tasksService.addTask('Test task');
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
