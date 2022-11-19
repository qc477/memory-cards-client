import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  titleText: string;
  isVisibleAddButton: boolean;
}

const initialState: HeaderState = {
  titleText: '',
  isVisibleAddButton: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeTitleText(state, action: PayloadAction<string>) {
      state.titleText = action.payload;
    },
    visibleAddButton(state, action: PayloadAction<boolean>) {
      state.isVisibleAddButton = action.payload;
    },
  },
});

export default headerSlice.reducer;
