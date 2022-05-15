// nest g controller tasks --no-spec
import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(tasksService: TasksService) { }
}
