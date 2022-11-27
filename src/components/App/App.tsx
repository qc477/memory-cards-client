import '@/assets/index.css';
import { appSlice } from '@/store/reducers/AppSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import Menu from '../Menu';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  const { setIsScrollY } = appSlice.actions;
  const dispatch = useDispatch();

  const handleScroll: EventListener = (event: Event) => {
    window.scrollY > 0 ? dispatch(setIsScrollY(true)) : dispatch(setIsScrollY(false));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      dispatch(setIsScrollY(false));
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
