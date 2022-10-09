import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export default menuSlice.reducer;
