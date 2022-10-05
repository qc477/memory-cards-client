import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  /* Decks */

  @Post()
  createDeck(@Body() deckDto: CreateDeckDto) {
    return this.decksService.createDeck(deckDto);
  }

  @Get()
  getAllDecks() {
    return this.decksService.getAllDecks();
  }

  @Delete(':id')
  deleteDeck(@Param('id') id: number) {
    return this.decksService.deleteDeck(id);
  }

  /* Cards */

  @Post(':deckId/cards')
  createCard(@Param('deckId') deckId: number, @Body() cardDto: CreateCardDto) {
    return this.decksService.createCard({ ...cardDto, deckId: deckId });
  }

  @Get(':deckId/cards')
  getAllCards(@Param('deckId') deckId: number) {
    return this.decksService.getAllCards(deckId);
  }

  @Delete('*/cards/:id')
  deleteCard(@Param('id') id: number) {
    return this.decksService.deleteCard(id);
  }
}
