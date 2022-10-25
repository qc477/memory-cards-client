import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deckAPI } from '../../services/DeckService';
import { headerSlice } from '../../store/reducers/HeaderSlice';
import SearchField from '../../components/UI/SearchField';
import DeckContainer from '../../components/DeckContainer';
import cl from './AllDecks.module.css';

const AllDecks: React.FC = () => {
  const { data: decks } = deckAPI.useFetchAllDecksQuery('');
  const { changeTitleText } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
  }, []);

  return (
    <main className={cl.main}>
      <SearchField />
      <DeckContainer decks={decks} />
    </main>
  );
};

export default AllDecks;
