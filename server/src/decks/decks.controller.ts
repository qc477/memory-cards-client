import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('decks')
export class DecksController {
  constructor(
    private decksService: DecksService,
  ) {}

  @Post()
  create(@Body() deckDto: CreateDeckDto) {
    return this.decksService.createDeck(deckDto);
  }

  @Post('/add-card')
  createCard(@Body() cardDto: CreateCardDto) {
    return this.decksService.createCard(cardDto);
  }

  @Get()
  getAll() {
    return this.decksService.getAllDecks();
  }

  @Get('/:deckId/cards')
  getAllCards(@Param('deckId') deckId: number) {
    return this.decksService.getAllCards(deckId);
  }
}
