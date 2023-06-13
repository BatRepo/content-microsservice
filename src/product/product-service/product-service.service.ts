import { Injectable } from '@nestjs/common';
import { Product } from '../product';

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      name: 'Produto 1',
      description: 'Esta é uma descrição aleatória do produto 1.',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
      price: 19.99,
      visible: true,
      type_product: 'Tipo Aleatório 1',
      sizes_image: ['small', 'medium', 'large'],
      slug: 'produto-1',
    },
    {
      name: 'Produto 2',
      description: 'Esta é uma descrição aleatória do produto 2.',
      images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
      price: 29.99,
      visible: false,
      type_product: 'Tipo Aleatório 2',
      sizes_image: ['small', 'medium'],
      slug: 'produto-2',
    },
    {
      name: 'Produto 3',
      description: 'Esta é uma descrição aleatória do produto 3.',
      images: ['image7.jpg', 'image8.jpg'],
      price: 39.99,
      visible: true,
      type_product: 'Tipo Aleatório 3',
      sizes_image: ['medium', 'large'],
      slug: 'produto-3',
    },
  ];

  getAll() {
    return this.products;
  }

  getBySlug(slug: string) {
    const product = this.products.find((value) => (value.slug = slug));
    return product;
  }

  create(product: Product) {
    this.products.push(product);
    return product;
  }

  update(product: Product) {
    let p = this.getBySlug(product.slug);
    if (p) {
      p = product;
    }
    return p;
  }

  delete(slug: string) {
    const index = this.products.findIndex((value) => value.slug == slug);
    if (index && index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
