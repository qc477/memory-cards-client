import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = { question: string; answer: string };

interface AddDeckState {
  name: string;
  cardsCounter: number;
  cards: Card[];
}

const initialState: AddDeckState = {
  name: '',
  cardsCounter: 0,
  cards: [],
};

export const pageAddDeckSlice = createSlice({
  name: 'addDeck',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCardsCounter(state, action: PayloadAction<number>) {
      state.cardsCounter = action.payload;
    },
    setCards(state, action: PayloadAction<Card>) {
      state.cards = [action.payload, ...state.cards];
    },
  },
});

export default pageAddDeckSlice.reducer;
