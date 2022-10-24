import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isScrollY: boolean;
}

const initialState: AppState = {
  isScrollY: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsScrollY(state, action: PayloadAction<boolean>) {
      state.isScrollY = action.payload;
    },
  },
});

export default appSlice.reducer;
