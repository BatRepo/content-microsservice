import { Controller, Post, Body } from '@nestjs/common';
import { ContentfulService } from 'src/contentful/contentful.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly contentfulService: ContentfulService) {}

  @Post()
  async handleWebhook(@Body() payload: any) {
    const entryId = payload.sys?.id;
    if (entryId) {
      const entry = await this.contentfulService.getContentById(entryId);
      console.log(entry);
      // Faça o que for necessário com o conteúdo retornado
    }
  }
}
