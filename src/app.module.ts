import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { ContentfulService } from './contentful/contentful.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaModule } from './media/media.module';
import { MediaService } from './media/media.service';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URL}`),
    ProductModule,
    MediaModule,
  ],
  controllers: [AppController, WebhookController],
  providers: [AppService, ContentfulService, MediaService],
})
export class AppModule {}
