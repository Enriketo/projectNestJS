import {
    Controller,
    Get,
    Query,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
  
  import { CustomersService } from '../services/customers.service';
  import { ParseIntPipe } from '../../common/parse-int.pipe';
  import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
  

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

  @Get()
  getAll() {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  getOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
