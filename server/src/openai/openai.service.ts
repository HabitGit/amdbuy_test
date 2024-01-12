import { HttpException, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { API_KEY } from '../../config';

@Injectable()
export class OpenaiService extends OpenAI {
  constructor() {
    super({ maxRetries: 0, apiKey: API_KEY});
  }

  async sendRequest(message: string) {
    try {
      const responseFromAi = await this.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: message}],
      });
      return {
        ...responseFromAi.choices[0].message,
      }
    } catch (e) {
      if (e instanceof OpenAI.APIError) {
        throw new HttpException(e.error, e.status)
      }
      throw new HttpException('Что то пошло не так', 500)
    }
  }
}
