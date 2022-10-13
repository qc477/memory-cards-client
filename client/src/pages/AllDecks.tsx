import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deckAPI } from '../services/DeckService';
import { headerSlice } from '../store/reducers/HeaderSlice';
import Main from '../components/Main';
import AppContainer from '../components/AppContainer';
import DeckContainer from '../components/DeckContainer';

const AllDecks: React.FC = () => {
  const { data: decks } = deckAPI.useFetchAllDecksQuery('');
  const { changeTitleText } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
  }, []);

  return (
    <Main>
      <AppContainer>
        <DeckContainer decks={decks} />
      </AppContainer>
    </Main>
  );
};

export default AllDecks;
