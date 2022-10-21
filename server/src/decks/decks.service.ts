import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from 'src/groups/groups.model';
import { GroupsService } from 'src/groups/groups.service';
import { Deck } from './decks.model';
import { CreateDeckDto } from './dto/create-deck.dto';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck) private deckRepository: typeof Deck, private groupsService: GroupsService) {}

  async createDeck(dto: CreateDeckDto): Promise<Deck> {
    const deck = await this.deckRepository.create(dto);
    return deck;
  }

  async getAllDecks(): Promise<Deck[]> {
    const decks = await this.deckRepository.findAll({include: {model: Group}});
    return decks;
  }

  async deleteDeck(id: number): Promise<number> {
    await this.deckRepository.destroy({ where: { id: id }, force: true });
    return id;
  }

  async incTotalCards(deckId: number) {
    await this.deckRepository.increment({ totalCards: 1 }, { where: { id: deckId } });
  }

  async setGroupId(deckId: number, groupId: number) {
    const deck = await this.deckRepository.findOne({ where: { id: deckId } });
    const group = await this.groupsService.getGroupById(groupId);
    await deck.$set('groups', [group.id]);
    deck.groups = [group];
  }
}
