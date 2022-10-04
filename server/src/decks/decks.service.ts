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

  async createDeck(dto: CreateDeckDto): Promise<Deck> {
    const deck = await this.deckRepository.create(dto);
    return deck;
  }

  async getAllDecks(): Promise<Deck[]> {
    const decks = await this.deckRepository.findAll();
    return decks;
  }

  async deleteDeck(id: number): Promise<number> {
    await this.deckRepository.destroy({ where: { id: id } });
    return id;
  }

  async createCard(dto: CreateCardDto): Promise<Card> {
    const card = await this.cardRepository.create(dto);
    const deck = await this.deckRepository.findOne({
      where: { id: dto.deckId },
    });
    deck.totalWords = deck.totalWords + 1;
    deck.save();
    return card;
  }

  async getAllCards(deckId: number): Promise<Card[]> {
    const cards = await this.cardRepository.findAll({
      where: { deckId: deckId },
    });
    return cards;
  }
}
