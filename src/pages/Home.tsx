import React from 'react';
import AppContainer from '../components/AppContainer/AppContainer';
import SortingBlock from '../components/SortingBlock';
import cl from './pages.module.css';

const Home: React.FC = () => {
  return (
    <main className={cl.main}>
      <AppContainer>
        <SortingBlock />
      </AppContainer>
    </main>
  );
};

export default Home;
