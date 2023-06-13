import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { ContentfulService } from './contentful/contentful.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController, WebhookController],
  providers: [AppService, ContentfulService],
})
export class AppModule {}
