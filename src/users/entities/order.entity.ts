import { User } from './user.entity';
import { Product } from '../../products/entities/product.entity';


export class Order {
    id: number;
    number: number;
    date: Date;
    price: number;
    coin: number;
    user: User;
    products: Product[];
}