import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'nelson',
      age: 18,
      email: 'jaja',
      password: 'password',
      city: 'Bogotá',
      country: 'Colombia',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id == id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
      //return null;
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...customer,
        ...payload,
      };
      return this.customers[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
