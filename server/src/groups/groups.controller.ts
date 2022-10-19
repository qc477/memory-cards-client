import { Body, Controller, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupService: GroupsService) {}

  @Post()
  createGroup(@Body() groupDto: CreateGroupDto) {
    return this.groupService.createGroup(groupDto);
  }
}
