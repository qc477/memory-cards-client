import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerReducer from './reducers/HeaderSlice';
import appTitleReducer from './reducers/AppTitleSlice';
import { deckAPI } from '../services/DeckService';

const rootReduser = combineReducers({
  headerReducer,
  appTitleReducer,
  [deckAPI.reducerPath]: deckAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deckAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];