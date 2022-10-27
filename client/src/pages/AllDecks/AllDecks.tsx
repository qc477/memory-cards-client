import Deck from 'components/Deck';
import Icons from 'components/Icons';
import Card from 'components/UI/Card';
import Input from 'components/UI/Input';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deckAPI } from 'services/DeckService';
import { headerSlice } from 'store/reducers/HeaderSlice';
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
      <Input startIcon={<Icons name='search' />} placeholder='Поиск' />
      <div className={cl.wrapper}>
        {decks &&
          decks.map((deck) => (
            <Card key={deck.id}>
              <Deck
                id={deck.id}
                title={deck.title}
                totalCards={deck.totalCards}
                totalExercises={deck.totalExercises}
                dateLastExercise={deck.dateLastExercise}
                groupStatistics={deck.groupStatistics}
              />
            </Card>
          ))}
      </div>
    </main>
  );
};

export default AllDecks;
