import React from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import SortingBlock from '../../components/SortingBlock';
import cl from './Home.module.css';

const Home: React.FC = () => {
  return (
    <main>
      <AppContainer>
        <div className={cl.wrapper}>
          <SortingBlock />
        </div>
      </AppContainer>
    </main>
  );
};

export default Home;
