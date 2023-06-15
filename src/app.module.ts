import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { ContentfulService } from './contentful/contentful.service';
import { ProductModule } from './product/product.module';
import { MediaModule } from './media/media.module';
import { MediaService } from './media/media.service';
import { ProductService } from './product/product-service/product-service.service';
import { ProductController } from './product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MediaModule,
    MongooseModule.forRoot(`${process.env.MONGO_URL}`),
  ],
  controllers: [AppController, WebhookController, ProductController],
  providers: [AppService, ContentfulService, MediaService, ProductService],
})
export class AppModule {}
