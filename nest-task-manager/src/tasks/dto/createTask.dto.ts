import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  priority: number;

  status: number;

  @IsUUID()
  userID: string;
}
