import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appTitleSlice } from '../store/reducers/AppTitleSlice';
import Main from '../components/Main';
import AppContainer from '../components/AppContainer';
import SortingBlock from '../components/SortingBlock';
import DeckContainer from '../components/DeckContainer';

const Home: React.FC = () => {
  const { changeTitle } = appTitleSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Все колоды'));
  }, []);

  return (
    <Main>
      <AppContainer>
        <SortingBlock />
        <DeckContainer />
      </AppContainer>
    </Main>
  );
};

export default Home;
