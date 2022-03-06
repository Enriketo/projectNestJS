import { Module } from '@nestjs/common';
//Modules Users
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from '../users/services/users.service';
import { CustomersController } from '../users/controllers/customers.controller';
import { CustomersService } from '../users/services/customers.service';
//Conect to others modules
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
