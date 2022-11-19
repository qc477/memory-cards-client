import Deck from '@/components/Deck';
import Icons from '@/components/Icons';
import Card from '@/components/UI/Card';
import Input from '@/components/UI/Input';
import { useDecks } from '@/hooks/useDecks';
import { deckAPI } from '@/services/DeckService';
import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AllDecks.module.css';

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
      <Input startIcon={<Icons name='search' />} setStateParent={setQuery} placeholder='Поиск' />
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
