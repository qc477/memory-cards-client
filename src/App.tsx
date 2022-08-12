import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Settings } from './pages';
import './index.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='about' element={<About />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
