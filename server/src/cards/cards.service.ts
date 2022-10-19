import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './model/cards.model';
import { Deck } from 'src/decks/model/decks.model';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card) private cardRepository: typeof Card,
    @InjectModel(Deck) private deckRepository: typeof Deck
  ) {}

  async createCard(dto: CreateCardDto): Promise<Card> {
    const card = await this.cardRepository.create(dto);
    const deck = await this.deckRepository.findOne({
      where: { id: dto.deckId },
    });
    deck.totalCards = deck.totalCards + 1;
    deck.save();
    return card;
  }

  async getAllCards(deckId: number): Promise<Card[]> {
    const cards = await this.cardRepository.findAll({
      where: { deckId: deckId },
    });
    return cards;
  }

  async deleteCard(id: number): Promise<number> {
    await this.cardRepository.destroy({ where: { id: id }, force: true });
    return id;
  }
}
