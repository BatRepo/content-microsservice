/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  visible: number;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  type_product: string;

  @Prop()
  images: [];

  @Prop()
  sizes_image: [];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
