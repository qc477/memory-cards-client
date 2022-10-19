import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('deck')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post(':deckId/cards')
  createCard(@Param('deckId') deckId: number, @Body() cardDto: CreateCardDto) {
    return this.cardsService.createCard({ ...cardDto, deckId: deckId });
  }

  @Get(':deckId/cards')
  getAllCards(@Param('deckId') deckId: number) {
    return this.cardsService.getAllCards(deckId);
  }

  @Delete('*/cards/:id')
  deleteCard(@Param('id') id: number) {
    return this.cardsService.deleteCard(id);
  }
}
