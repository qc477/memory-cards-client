import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: true,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export default menuSlice.reducer;
