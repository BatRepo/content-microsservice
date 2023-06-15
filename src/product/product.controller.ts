import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product-service/product-service.service';
import { product } from './product';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAll(): Promise<product[]> {
    return this.productService.getAll();
  }

  @Get()
  async getBySlug(@Param('slug') slug: string): Promise<product> {
    return this.productService.getBySlug(slug);
  }

  @Post()
  async create(@Body() product: product): Promise<product> {
    return this.productService.create(product);
  }

  @Put(':slug')
  async update(
    @Param('slug') slug: string,
    @Body() product: product,
  ): Promise<product> {
    product.slug = slug;
    return this.productService.update(product);
  }

  @Delete(':slug')
  async delete(@Param('slug') slug: string) {
    this.productService.delete(slug);
  }
}
