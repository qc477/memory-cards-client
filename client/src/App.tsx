import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appSlice } from './store/reducers/AppSlice';
import Header from './components/Header';
import Menu from './components/Menu';
import AppRoutes from './components/AppRoutes';
import './index.css';

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
