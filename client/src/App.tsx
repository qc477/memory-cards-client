import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppTitle from './components/AppTitle';
import AppRoutes from './components/AppRoutes';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <AppTitle />
      </Header>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
