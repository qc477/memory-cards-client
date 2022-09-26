import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
  @Get('/decks')
  getDecks() {
    return { id: 1, title: 'Англо - Русский словарь' };
  }
}
