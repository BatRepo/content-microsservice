import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product-service/product-service.service';
import ProductSchema from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Content', schema: ProductSchema, collection: 'Products' },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
