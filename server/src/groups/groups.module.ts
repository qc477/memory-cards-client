import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from '../cards/model/cards.model';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './model/group.model';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [SequelizeModule.forFeature([Group, Card])],
})
export class GroupsModule {}
