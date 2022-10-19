import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './model/group.model';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepository: typeof Group) {}

  async createGroup(dto: CreateGroupDto) {
    const groups = await this.groupRepository.findAll();
    if (groups.length >= 0 && groups.length < 5) {
      const group = await this.groupRepository.create(dto);
      return group;
    }
    return 'Достигнуто максимальное количество возможных групп!';
  }
}
