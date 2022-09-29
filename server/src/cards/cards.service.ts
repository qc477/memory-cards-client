import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './cards.model';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card) private cardRepository: typeof Card) {}

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
