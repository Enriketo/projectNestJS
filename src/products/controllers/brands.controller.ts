import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { BrandsService } from '../services/brands.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getAll() {
    return this.brandsService.findAll();
  }

  @Get(':brandId')
  getOne(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findOne(brandId);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateBrandDto) {
    return this.brandsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
