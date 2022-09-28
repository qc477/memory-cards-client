import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WordsController } from './words.controller';
import { Word } from './words.model';
import { Deck } from '../decks/decks.model';
import { WordsService } from './words.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [SequelizeModule.forFeature([Deck, Word])],
})
export class WordsModule {}
