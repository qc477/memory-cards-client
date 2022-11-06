import Deck from '@Components/Deck';
import Icons from '@Components/Icons';
import Card from '@Components/UI/Card';
import Input from '@Components/UI/Input';
import { deckAPI } from '@Services/DeckService';
import { headerSlice } from '@Store/reducers/HeaderSlice';
import { menuSlice } from '@Store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AllDecks.module.css';

const AllDecks: React.FC = () => {
  const { data: decks } = deckAPI.useFetchAllDecksQuery('');
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <main className={cl.main}>
      <Input startIcon={<Icons name='search' />} placeholder='Поиск' clearButton/>
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
                groups={deck.groups}
              />
            </Card>
          ))}
      </div>
    </main>
  );
};

export default AllDecks;
