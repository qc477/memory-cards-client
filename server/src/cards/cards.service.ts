import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DecksService } from 'src/decks/decks.service';
import { GroupsService } from 'src/groups/groups.service';
import { Card } from './cards.model';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card) private cardRepository: typeof Card,
    private groupsService: GroupsService,
    private decksService: DecksService
  ) {}

  async createCard(dto: CreateCardDto): Promise<Card> {
    const card = await this.cardRepository.create(dto);
    const firstGroup = await this.groupsService.getFirstGroup();
    card.groupId = firstGroup.id;
    card.save();
    await this.decksService.incTotalCards(dto.deckId);
    await this.decksService.setGroupId(dto.deckId, firstGroup.id);
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
