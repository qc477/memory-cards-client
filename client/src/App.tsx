import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import AppRoutes from './components/AppRoutes';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
