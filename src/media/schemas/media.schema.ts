/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  nameAsset: String,
  file: [],
  description: String,
  assetId: String,
});

export default mediaSchema;
