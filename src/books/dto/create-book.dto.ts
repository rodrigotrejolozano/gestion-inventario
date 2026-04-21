import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  MinLength,
  IsPositive,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  author: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  year?: number;
}
