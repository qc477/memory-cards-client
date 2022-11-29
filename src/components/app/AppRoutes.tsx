import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from '../loader/PageLoader';

const AllDecks = React.lazy(() => import('../../pages/AllDecks'));
const AddDeck = React.lazy(() => import('../../pages/AddDeck'));
const About = React.lazy(() => import('../../pages/About'));
const Settings = React.lazy(() => import('../../pages/Settings'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='decks'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <AllDecks />
          </React.Suspense>
        }
      />
      <Route
        path='add'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <AddDeck />
          </React.Suspense>
        }
      />
      <Route
        path='about'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path='settings'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <Settings />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;