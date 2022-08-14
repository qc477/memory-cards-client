import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Home, Settings } from '../../pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='settings' element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
