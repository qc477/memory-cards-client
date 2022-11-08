import Deck from '@Components/Deck';
import Icons from '@Components/Icons';
import Card from '@Components/UI/Card';
import Input from '@Components/UI/Input';
import { useDecks } from '@Hooks/useDecks';
import { deckAPI } from '@Services/DeckService';
import { headerSlice } from '@Store/reducers/HeaderSlice';
import { menuSlice } from '@Store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AllDecks.module.css';

const AllDecks: React.FC = () => {
  const { data: decks, isLoading } = deckAPI.useFetchAllDecksQuery('');
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const searchDecks = useDecks(decks, query);

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <main className={cl.main}>
      <Input startIcon={<Icons name='search' />} placeholder='Поиск' clearButton />
      <div className={cl.wrapper}>
        {isLoading && <p>Loading...</p>}
        {searchDecks &&
          searchDecks.map((deck) => (
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
