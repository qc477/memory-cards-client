import React from 'react';
import SortingBlock from '../components/SortingBlock';
import cl from './pages.module.css';

const Home: React.FC = () => {
  return (
    <main className={cl.main}>
      <SortingBlock />
    </main>
  );
};

export default Home;
