import Icons from '@/components/ui/Icons';
import Card from '@/components/ui/Card';
import TextField from '@/components/ui/TextField';
import { useDecks } from '@/hooks/useDecks';
import { deckAPI } from '@/services/DeckService';
import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AllDecks.module.css';
import Deck from './components/Deck';

const AllDecks: React.FC = () => {
  const { data: decks, isLoading } = deckAPI.useFetchAllDecksQuery('');
  const { changeTitleText, visibleAddButton } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const searchDecks = useDecks(decks, query);

  useEffect(() => {
    dispatch(changeTitleText('Все колоды'));
    dispatch(visibleAddButton(true));
    dispatch(setIsOpen(false));

    return () => {
      dispatch(visibleAddButton(false));
    };
  }, []);

  return (
    <main className={cl.main}>
      <TextField
        startIcon={<Icons name='search' />}
        value={query}
        placeholder='Поиск'
        type='search'
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
      />
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
