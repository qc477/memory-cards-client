import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from '../decks/model/decks.model';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './model/cards.model';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [SequelizeModule.forFeature([Card, Deck])],
})
export class CardsModule {}
