import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Deck } from './models/decks.model';
import { Card } from './models/cards.model';
import { CreateDeckDto } from './dto/create-deck.dto';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class DecksService {
  constructor(
    @InjectModel(Deck) private deckRepository: typeof Deck,
    @InjectModel(Card) private cardRepository: typeof Card,
  ) {}

  async createDeck(dto: CreateDeckDto) {
    const deck = await this.deckRepository.create(dto);
    return deck;
  }

  async getAllDecks() {
    const decks = await this.deckRepository.findAll();
    return decks;
  }

  async createCard(dto: CreateCardDto) {
    const card = await this.cardRepository.create(dto);
    return card;
  }

  async getAllCards(deckId: number) {
    const cards = await this.cardRepository.findAll({
      where: { deckId: deckId },
    });
    return cards;
  }
}
