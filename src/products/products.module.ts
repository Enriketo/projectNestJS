import { Module } from '@nestjs/common';
//Modules Products
import { BrandsController } from '../products/controllers/brands.controller';
import { BrandsService } from '../products/services/brands.service';
import { CategoriesController } from '../products/controllers/categories.controller';
import { CategoriesService } from '../products/services/categories.service';
import { ProductsController } from '../products/controllers/products.controller';
import { ProductsService } from '../products/services/products.service';
//Conect to others modules
import { OrdersController } from '../users/controllers/orders.controller';
import { OrdersService } from '../users/services/orders.service';

@Module({
  imports: [],
  controllers: [
    BrandsController,
    CategoriesController,
    OrdersController,
    ProductsController,
  ],
  providers: [BrandsService, CategoriesService, OrdersService, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
