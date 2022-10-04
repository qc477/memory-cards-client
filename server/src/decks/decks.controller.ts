import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  /* Decks */

  @Post()
  create(@Body() deckDto: CreateDeckDto) {
    return this.decksService.createDeck(deckDto);
  }

  @Get()
  getAll() {
    return this.decksService.getAllDecks();
  }

  /* Cards */

  @Post('/:deckId/cards/add')
  createCard(@Param('deckId') deckId: number, @Body() cardDto: CreateCardDto) {
    return this.decksService.createCard({ ...cardDto, deckId: deckId });
  }

  @Get('/:deckId/cards')
  getAllCards(@Param('deckId') deckId: number) {
    return this.decksService.getAllCards(deckId);
  }
}
