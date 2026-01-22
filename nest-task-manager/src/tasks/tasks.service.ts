import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from 'generated/prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(taskDto: CreateTaskDto): Promise<Task> {
    const { title, priority, status, userID } = taskDto;
    console.log('Creating task with data:', taskDto);

    try {
      const createdTask = await this.prisma.task.create({
        data: {
          title,
          priority,
          status,
          user: { connect: { id: userID } },
        },
      });

      return createdTask;
    } catch {
      throw new InternalServerErrorException('Failed to create task');
    }
  }

  async deleteTask(taskID: string): Promise<void> {
    try {
      await this.prisma.task.delete({
        where: { id: taskID },
      });
    } catch {
      throw new InternalServerErrorException('Failed to delete task');
    }
  }

  async getTasksByUser(userID: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: { userId: userID },
    });
  }

  async updateTaskStatus(taskID: string, status: number): Promise<Task> {
    try {
      const updatedTask = await this.prisma.task.update({
        where: { id: taskID },
        data: { status },
      });
      return updatedTask;
    } catch {
      throw new InternalServerErrorException('Failed to update task status');
    }
  }

  async updateTask(
    taskID: string,
    title: string,
    priority: number,
    status: number,
  ): Promise<Task> {
    try {
      const updatedTask = await this.prisma.task.update({
        where: { id: taskID },
        data: { title, priority, status },
      });
      return updatedTask;
    } catch {
      throw new InternalServerErrorException('Failed to update task');
    }
  }

  async getTaskByID(taskID: string): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id: taskID },
    });
  }
}
