import { Injectable } from '@nestjs/common';
import { media } from './media';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel('Media') private readonly mediaModel: Model<media>,
  ) {}

  async getAll() {
    return await this.mediaModel.find().exec();
  }

  async getById(id: string) {
    const asset = await this.mediaModel.findOne({ assetId: id });
    return asset;
  }

  async create(asset: media) {
    const createAsset = new this.mediaModel(asset);
    return await this.mediaModel.create(createAsset);
  }

  async update(asset: media) {
    await this.mediaModel.updateOne({ assetId: asset.assetId }, asset).exec();
    return this.getById(asset.assetId);
  }

  async delete(id: string): Promise<DeleteResult> {
    const del = await this.mediaModel.deleteOne({ assetId: id }).exec();
    return del;
  }
}
