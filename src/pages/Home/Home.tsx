import React from 'react';
import Main from '../../components/Main';
import AppContainer from '../../components/AppContainer';
import SortingBlock from '../../components/SortingBlock';
import cl from './Home.module.css';

const Home: React.FC = () => {
  return (
    <Main>
      <AppContainer>
        <div className={cl.wrapper}>
          <SortingBlock />
        </div>
      </AppContainer>
    </Main>
  );
};

export default Home;
