import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  isShowBackButton: boolean;
}

const initialState: HeaderState = {
  isShowBackButton: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<boolean>) {
      state.isShowBackButton = action.payload;
    },
  },
});

export default headerSlice.reducer;
