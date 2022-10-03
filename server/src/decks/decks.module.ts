import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { Deck } from './models/decks.model';
import { Card } from './models/cards.model';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [SequelizeModule.forFeature([Deck, Card])],
})
export class DecksModule {}
