import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product-service.service';
import { Product } from './model/product.model';
import { productDTO } from './productDTO';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get()
  async getBySlug(@Param('slug') slug: string): Promise<Product> {
    return this.productService.getBySlug(slug);
  }

  @Post()
  async create(@Body() product: productDTO): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':slug')
  async update(
    @Param('slug') slug: string,
    @Body() product: productDTO,
  ): Promise<Product> {
    product.slug = slug;
    return this.productService.update(product);
  }

  @Delete(':slug')
  async delete(@Param('slug') slug: string) {
    this.productService.delete(slug);
  }
}
