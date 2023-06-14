/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [],
  price: Number,
  visible: String,
  type_product: String,
  sizes_image: [],
  slug: String,
});

export default ProductSchema;
