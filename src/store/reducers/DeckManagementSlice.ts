import { ICard } from '@/models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeckManagementState {
  isReadingFaile: boolean;
  totalCards: number;
  cards: ICard[];
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
    setCards(state, action: PayloadAction<ICard[]>) {
      state.cards = action.payload;
    },
    setCard(state, action: PayloadAction<ICard>) {
      state.cards = [action.payload, ...state.cards];
    },
    removeCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((card) => card.id != action.payload);
    },
  },
});

export default deckManagementSlice.reducer;
