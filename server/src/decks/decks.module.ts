import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { Deck } from './decks.model';
import { Card } from 'src/cards/cards.model';
import { Group } from 'src/groups/groups.model';
import { DeckGroups } from 'src/deck-groups/deck-groups.model';
import { GroupsModule } from 'src/groups/groups.module';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [SequelizeModule.forFeature([Deck, Card, Group, DeckGroups]), GroupsModule],
  exports: [DecksService],
})
export class DecksModule {}
