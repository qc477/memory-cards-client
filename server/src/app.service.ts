import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDecks() {
    return { id: 1, title: 'Англо - Русский словарь' };
  }
}
