import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerReducer from './reducers/HeaderSlice';

const rootReduser = combineReducers({
  headerReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
