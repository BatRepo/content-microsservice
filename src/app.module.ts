import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { ContentfulService } from './contentful/contentful.service';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductService } from './product/product-service.service';
import { MediaService } from './media/media.service';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}`),
    MediaModule,
    ProductModule,
  ],
  controllers: [AppController, WebhookController, ProductController],
  providers: [AppService, ContentfulService, MediaService, ProductService],
})
export class AppModule {}

console.log('app Module started');
