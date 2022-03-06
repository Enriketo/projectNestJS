import { IsNumber, IsString, IsNotEmpty, IsPositive, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    readonly number: number;

    @IsString()
    @IsNotEmpty()
    readonly user: string;

    @IsDate()
    @IsNotEmpty()
    readonly date: Date;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;
    
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly coin: number;

    @IsString()
    @IsNotEmpty()
    readonly products: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}