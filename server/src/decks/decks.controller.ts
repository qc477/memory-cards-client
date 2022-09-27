import { Body, Controller, Get, Post } from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(private deckService: DecksService) {}

  @Post()
  create(@Body() deckDto: CreateDeckDto) {
    return this.deckService.createDeck(deckDto);
  }

  @Get()
  getAll() {
    return this.deckService.getAllDecks();
  }
}
