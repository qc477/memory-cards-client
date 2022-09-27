import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Deck } from './decks.models';
import { CreateDeckDto } from './dto/create-deck.dto';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck) private deckRepository: typeof Deck) {}

  async createDeck(dto: CreateDeckDto) {
    const deck = await this.deckRepository.create(dto);
    return deck;
  }

  async getAllDecks() {
    const decks = await this.deckRepository.findAll();
    return decks;
  }
}
