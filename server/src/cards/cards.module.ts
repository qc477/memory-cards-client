import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './model/cards.model';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [SequelizeModule.forFeature([Card])],
})
export class CardsModule {}
