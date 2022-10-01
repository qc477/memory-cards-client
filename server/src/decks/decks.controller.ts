import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CardsService } from 'src/cards/cards.service';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { CreateCardDto } from '../cards/dto/create-card.dto';

@Controller('decks')
export class DecksController {
  constructor(
    private decksService: DecksService,
    private cardsService: CardsService,
  ) {}

  @Post()
  create(@Body() deckDto: CreateDeckDto) {
    return this.decksService.createDeck(deckDto);
  }

  @Post('/add-card')
  createCard(@Body() cardDto: CreateCardDto) {
    return this.cardsService.createCard(cardDto);
  }

  @Get()
  getAll() {
    return this.decksService.getAllDecks();
  }

  @Get('/:deckId')
  getAllCards(@Param('deckId') deckId: number) {
    return this.cardsService.getAllCards(deckId);
  }
}
