import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Logo from './components/Logo';
import AppRoutes from './components/AppRoutes';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <Logo />
      </Header>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
