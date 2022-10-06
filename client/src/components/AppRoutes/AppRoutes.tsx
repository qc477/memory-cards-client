import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AllDecks = React.lazy(() => import('../../pages/AllDecks'));
const About = React.lazy(() => import('../../pages/About'));
const Settings = React.lazy(() => import('../../pages/Settings'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/decks'
        element={
          <React.Suspense fallback={<p>Загрузка страницы</p>}>
            <AllDecks />
          </React.Suspense>
        }
      />
      <Route
        path='about'
        element={
          <React.Suspense fallback={<p>Загрузка страницы</p>}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path='settings'
        element={
          <React.Suspense fallback={<p>Загрузка страницы</p>}>
            <Settings />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
