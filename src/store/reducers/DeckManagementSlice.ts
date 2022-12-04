import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = { question: string; answer: string };

interface DeckManagementState {
  isReadingFaile: boolean;
  totalCards: number;
  cards: Card[];
}

const initialState: DeckManagementState = {
  isReadingFaile: false,
  totalCards: 0,
  cards: [],
};

export const deckManagementSlice = createSlice({
  name: 'deckManagement',
  initialState,
  reducers: {
    setReadingFile(state, action: PayloadAction<boolean>) {
      state.isReadingFaile = action.payload;
    },
    setTotalCards(state, action: PayloadAction<number>) {
      state.totalCards = action.payload;
    },
    setCards(state, action: PayloadAction<Card[]>) {
      state.cards = action.payload;
    },
    setCard(state, action: PayloadAction<Card>) {
      state.cards = [action.payload, ...state.cards];
    },
  },
});

export default deckManagementSlice.reducer;
