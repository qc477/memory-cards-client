import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  titleText: string;
}

const initialState: HeaderState = {
  titleText: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeTitleText(state, action: PayloadAction<string>) {
      state.titleText = action.payload;
    },
  },
});

export default headerSlice.reducer;
