/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Media extends Document {
  @Prop({ required: true })
  assetId: string;

  @Prop()
  nameAsset: string;

  @Prop()
  description: string;

  @Prop()
  file: [];
}

export const MediaSchema = SchemaFactory.createForClass(Media);
