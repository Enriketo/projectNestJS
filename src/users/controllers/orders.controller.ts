import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
  
  import { OrdersService } from '../services/orders.service';
  import { ParseIntPipe } from '../../common/parse-int.pipe';
  import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

  @Get()
  getAll() {
    return this.ordersService.findAll();
  }

  @Get(':orderId')
  getOne(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.ordersService.findOne(orderId);
  }

//  @Post()
//  create(@Body() payload: CreateOrderDto) {
//    return this.ordersService.create(payload);
//  }

//  @Put(':id')
//  update(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
//    return this.ordersService.update(+id, payload);
//  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
