import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = { question: string; answer: string };

interface DeckManagementState {
  totalCards: number;
  cards: Card[];
}

const initialState: DeckManagementState = {
  totalCards: 0,
  cards: [],
};

export const deckManagementSlice = createSlice({
  name: 'addDeck',
  initialState,
  reducers: {
    setTotalCards(state, action: PayloadAction<number>) {
      state.totalCards = action.payload;
    },
    setCards(state, action: PayloadAction<Card>) {
      state.cards = [action.payload, ...state.cards];
    },
  },
});

export default deckManagementSlice.reducer;
