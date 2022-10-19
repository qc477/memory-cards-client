import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { Deck } from './model/decks.model';
import { Card } from '../cards/model/cards.model';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [SequelizeModule.forFeature([Deck, Card])],
})
export class DecksModule {}
