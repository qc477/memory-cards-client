import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/AppSlice';
import headerReducer from './reducers/HeaderSlice';
import menuReducer from './reducers/MenuSlice';
import pageAddDeckReducer from './reducers/PageAddDeckSlice';
import { deckAPI } from '../services/DeckService';

const rootReduser = combineReducers({
  appReducer,
  headerReducer,
  menuReducer,
  pageAddDeckReducer,
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
