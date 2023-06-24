import { Controller, Post, Body } from '@nestjs/common';
import { ContentfulService } from 'src/contentful/contentful.service';
import { MediaService } from 'src/media/media.service';
import { ProductService } from 'src/product/product-service.service';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly contentfulService: ContentfulService,
    private readonly mediaservice: MediaService,
    private readonly productservice: ProductService,
  ) {}

  @Post()
  async handleWebhook(@Body() payload: any) {
    const entryId = payload.sys?.id;
    const modeEntry = payload.sys?.type;
    let exeded = 0;
    const entry = payload.sys?.contentType?.sys?.id;
    if (entry === 'products') {
      if (modeEntry === 'DeletedEntry') {
        const productSlug = payload.fields?.slug;
        console.log('productSlug', productSlug);
        this.productservice.delete(productSlug);
      }
      if (modeEntry === 'Entry' && exeded == 0) {
        if (entryId) {
          const entry = await this.contentfulService.getContentById(entryId);
          exeded = 1;
          if (entry?.fields) {
            console.log('entry.fields', entry.fields);
            console.log('entry.fields.images', entry.fields.images);
            // const product = new Product({ entry.fields });
            // console.log('product', product);
            // this.productService.create(product);
          }
        }
      }
    }
    if (modeEntry === 'Asset' && exeded == 0) {
      exeded = 1;
      const { title, file, description } = payload.fields;
      const assetId = payload.sys?.id;
      await this.mediaservice.create({
        nameAsset: title,
        file,
        description,
        assetId,
      });
    }
  }
}
