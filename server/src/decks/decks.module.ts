import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { CardsService } from '../cards/cards.service';
import { Deck } from './decks.model';
import { Card } from '../cards/cards.model';

@Module({
  controllers: [DecksController],
  providers: [DecksService, CardsService],
  imports: [SequelizeModule.forFeature([Deck, Card])],
})
export class DecksModule {}
