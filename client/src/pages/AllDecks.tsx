import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerSlice } from '../store/reducers/HeaderSlice';
import Main from '../components/Main';
import AppContainer from '../components/AppContainer';
import SortingBlock from '../components/SortingBlock';
import DeckContainer from '../components/DeckContainer';

const AllDecks: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
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

export default AllDecks;
