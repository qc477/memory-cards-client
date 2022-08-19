import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogoState {
  title: string;
}

const initialState: LogoState = {
  title: 'LeitnerSystemApp',
};

export const logoSlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export default logoSlice.reducer;
