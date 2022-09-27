import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { Deck } from './decks.models';
import { DecksService } from './decks.service';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [SequelizeModule.forFeature([Deck])],
})
export class DecksModule {}
