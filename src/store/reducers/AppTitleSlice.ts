import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppTitleState {
  title: string;
}

const initialState: AppTitleState = {
  title: 'LeitnerSystemApp',
};

export const appTitleSlice = createSlice({
  name: 'appTitle',
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export default appTitleSlice.reducer;
