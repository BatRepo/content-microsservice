import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product-service/product-service.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
