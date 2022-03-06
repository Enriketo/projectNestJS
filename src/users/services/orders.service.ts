import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';

@Injectable()
export class OrdersService {
    private counterId = 1;
    private orders: Order[] = [
//      {
//        id: 1,
//        number: 1,
//        date: new Date(),
//        price: 1000,
//        coin: 2,
//      },
    ];
  
    findAll() {
      return this.orders;
    }
  
    findOne(id: number) {
      const order = this.orders.find((item) => item.id == id);
      if (!order) {
        throw new NotFoundException(`Order #${id} not found`);
      }
      return order;
    }
  
//    create(payload: CreateOrderDto) {
//      console.log(payload);
//      this.counterId = this.counterId + 1;
//
//      const newOrder = {
//        id: this.counterId,
//        ...payload,
//      };
//      this.orders.push(newOrder);
//      return newOrder;
//    }
  
//    update(id: number, payload: UpdateOrderDto) {
//      const order = this.findOne(id);
//      if (order) {
//        const index = this.orders.findIndex((item) => item.id === id);
//        this.orders[index] = {
//          ...order,
//          ...payload,
//        };
//        return this.orders[index];
//      }
//      return null;
//    }
  
    remove(id: number) {
      const index = this.orders.findIndex((item) => item.id === id);
      if (index === -1) {
        throw new NotFoundException(`Order #${id} not found`);
      }
      this.orders.splice(index, 1);
      return true;
    }
}