import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardsController } from './cards.controller';
import { Card } from './cards.model';
import { Deck } from '../decks/decks.model';
import { CardsService } from './cards.service';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [SequelizeModule.forFeature([Deck, Card])],
})
export class CardsModule {}
