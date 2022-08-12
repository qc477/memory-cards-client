import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Settings } from './pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='settings' element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
