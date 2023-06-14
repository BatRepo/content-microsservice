import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { MediaService } from 'src/media/media.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly mediaService: MediaService,
  ) {}

  async getAll() {
    return await this.productModel.find().exec();
  }

  async getBySlug(slug: string) {
    const product = await this.productModel.findOne({ slug });
    return product;
  }

  async create(product: Product) {
    const productImage = product.images.sys;
    const productSizeImages = product.sizes_image.sys?.id;
    if (productImage.length > 1) {
      const imageIds = productImage.id.reduce(async (ids, image) => {
        const imagem = await this.mediaService.getById(image.id);
        if (imagem) {
          ids.push(imagem);
        }
        return ids;
      }, []);
      product.images = imageIds;
    } else {
      const imageCast = await this.mediaService.getById(productImage.id);
      product.images = imageCast;
    }

    if (productSizeImages.length > 1) {
      const imageIds = productSizeImages.id.reduce(async (ids, image) => {
        const imagem = await this.mediaService.getById(image.id);
        if (imagem) {
          ids.push(imagem);
        }
        return ids;
      }, []);
      product.sizes_image = imageIds;
    } else {
      const imageCast = await this.mediaService.getById(productSizeImages.id);
      product.sizes_image = imageCast;
    }

    const createProduct = new this.productModel(product);
    return await this.productModel.create(createProduct);
  }

  async update(product: Product) {
    await this.productModel.updateOne({ slug: product.slug }, product).exec();
    return this.getBySlug(product.slug);
  }

  async delete(slug: string): Promise<DeleteResult> {
    const del = await this.productModel.deleteOne({ slug }).exec();
    return del;
  }
}
