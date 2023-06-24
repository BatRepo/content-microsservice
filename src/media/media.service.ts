import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { Media } from './model/media.model';
import { mediaDTO } from './mediaDTO';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name) private readonly mediaModel: Model<Media>,
  ) {}

  async getAll(): Promise<Media[]> {
    return await this.mediaModel.find();
  }

  async getById(id: string): Promise<Media> {
    const asset = await this.mediaModel.findOne({ assetId: id });
    return asset;
  }

  async create(asset: mediaDTO): Promise<Media> {
    const createAsset = new this.mediaModel(asset);
    return await this.mediaModel.create(createAsset);
  }

  async update(asset: mediaDTO): Promise<Media> {
    await this.mediaModel.updateOne({ assetId: asset.assetId }, asset).exec();
    return this.getById(asset.assetId);
  }

  async delete(id: string): Promise<DeleteResult> {
    const del = await this.mediaModel.deleteOne({ assetId: id }).exec();
    return del;
  }
}
