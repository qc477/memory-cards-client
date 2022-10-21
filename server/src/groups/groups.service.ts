import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './groups.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepository: typeof Group) {}

  async create(dto: CreateGroupDto) {
    return await this.groupRepository.create(dto);
  }

  async getFirstGroup() {
    return await this.groupRepository.findOne({ order: [['id', 'ASC']] });
  }

  async getGroupById(groupId: number) {
    return await this.groupRepository.findOne({ where: { id: groupId } });
  }
}
