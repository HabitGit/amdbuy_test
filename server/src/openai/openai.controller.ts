import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {
  }
  @Post('/send')
  async sendMessage(@Body() message: {message: string}) {
    return this.openaiService.sendRequest(message.message);
  }
}
