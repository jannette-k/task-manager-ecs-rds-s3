import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() taskDto: CreateTaskDto) {
    return await this.tasksService.createTask(taskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') taskID: string) {
    return await this.tasksService.deleteTask(taskID);
  }

  @Get('user/:userID')
  async getTasksByUser(@Param('userID') userID: string) {
    return await this.tasksService.getTasksByUser(userID);
  }

  @Patch()
  async updateTaskStatus(
    @Body('taskID') taskID: string,
    @Body('status') status: number,
  ) {
    return await this.tasksService.updateTaskStatus(taskID, status);
  }

  @Put(':id')
  async updateTask(
    @Param('id') taskID: string,
    @Body('title') title: string,
    @Body('priority') priority: number,
    @Body('status') status: number,
  ) {
    console.log({taskID, title, priority, status})
    return await this.tasksService.updateTask(taskID, title, priority, status);
  }

  @Get(':id')
  async getTaskByID(@Param('id') taskID: string) {
    return await this.tasksService.getTaskByID(taskID);
  }
}
