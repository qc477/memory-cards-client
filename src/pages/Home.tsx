import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoSlice } from '../store/reducers/LogoSlice';
import Main from '../components/Main';
import AppContainer from '../components/AppContainer';
import SortingBlock from '../components/SortingBlock';
import Decks from '../components/Decks';

const Home: React.FC = () => {
  const { changeTitle } = logoSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('LeitnerSystemApp'));
  }, []);

  return (
    <Main>
      <AppContainer>
        <SortingBlock />
        <Decks />
      </AppContainer>
    </Main>
  );
};

export default Home;
