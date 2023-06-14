import { Injectable } from '@nestjs/common';
import { Media } from './media';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel('media') private readonly mediaModel: Model<Media>,
  ) {}

  async getAll() {
    return await this.mediaModel.find().exec();
  }

  async getById(id: string) {
    const asset = await this.mediaModel.findOne({ assetId: id });
    return asset;
  }

  async create(asset: Media) {
    const createAsset = new this.mediaModel(asset);
    return await this.mediaModel.create(createAsset);
  }

  async update(asset: Media) {
    await this.mediaModel.updateOne({ assetId: asset.assetId }, asset).exec();
    return this.getById(asset.assetId);
  }

  async delete(id: string): Promise<DeleteResult> {
    const del = await this.mediaModel.deleteOne({ assetId: id }).exec();
    return del;
  }
}
