import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from '../loader/PageLoader';

const Decks = React.lazy(() => import('../../pages/Decks'));
const NewDeck = React.lazy(() => import('../../pages/NewDeck'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='decks'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <Decks />
          </React.Suspense>
        }
      />
      <Route
        path='new-deck'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <NewDeck />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
