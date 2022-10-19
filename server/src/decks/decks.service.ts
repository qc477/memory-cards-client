import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Deck } from './model/decks.model';
import { CreateDeckDto } from './dto/create-deck.dto';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck) private deckRepository: typeof Deck) {}

  async createDeck(dto: CreateDeckDto): Promise<Deck> {
    const deck = await this.deckRepository.create(dto);
    return deck;
  }

  async getAllDecks(): Promise<Deck[]> {
    const decks = await this.deckRepository.findAll();
    return decks;
  }

  async deleteDeck(id: number): Promise<number> {
    await this.deckRepository.destroy({ where: { id: id }, force: true });
    return id;
  }
}
