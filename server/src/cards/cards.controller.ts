import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post()
  create(@Body() cardDto: CreateCardDto) {
    return this.cardsService.createCard(cardDto);
  }

  @Get('/:deckId')
  getAll(@Param('deckId') deckId: number) {
    return this.cardsService.getAllCards(deckId);
  }
}
