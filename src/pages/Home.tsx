import React from 'react';
import Main from '../../components/Main';
import AppContainer from '../../components/AppContainer';
import SortingBlock from '../../components/SortingBlock';

const Home: React.FC = () => {
  return (
    <Main>
      <AppContainer>
        <SortingBlock />
      </AppContainer>
    </Main>
  );
};

export default Home;
