import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { CategoriesService } from '../services/categories.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.findOne(categoryId);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
