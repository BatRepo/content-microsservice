import { Injectable } from '@nestjs/common';
import { createClient, Entry } from 'contentful';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: `${process.env.SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  });

  async getContentById(id: string): Promise<Entry<any>> {
    const entry = await this.client.getEntry(id);
    return entry;
  }
}
