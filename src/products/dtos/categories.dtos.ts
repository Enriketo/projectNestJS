import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly class: number;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
