import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product-service/product-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './model/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, Product],
})
export class ProductModule {}
