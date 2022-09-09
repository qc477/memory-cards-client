import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerReducer from './reducers/HeaderSlice';
import logoReducer from './reducers/LogoSlice';
import { decksAPI } from '../services/DecksService';

const rootReduser = combineReducers({
  headerReducer,
  logoReducer,
  [decksAPI.reducerPath]: decksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(decksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
