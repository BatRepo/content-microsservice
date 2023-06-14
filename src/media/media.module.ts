import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import mediaSchema from './schemas/media.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Content', schema: mediaSchema, collection: 'media' },
    ]),
  ],
  providers: [MediaService],
})
export class MediaModule {}
