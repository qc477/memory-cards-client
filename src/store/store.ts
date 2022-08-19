import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerReducer from './reducers/HeaderSlice';
import logoReducer from './reducers/LogoSlice';

const rootReduser = combineReducers({
  headerReducer,
  logoReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
