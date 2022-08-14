import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Home, Settings } from './pages';
import Header from './components/Header';
import Logo from './components/Logo';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <Logo />
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
