import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Card } from './cards.model';
import { Group } from 'src/groups/groups.model';
import { DecksModule } from 'src/decks/decks.module';
import { GroupsModule } from 'src/groups/groups.module';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [SequelizeModule.forFeature([Card, Group]), DecksModule, GroupsModule],
})
export class CardsModule { }
