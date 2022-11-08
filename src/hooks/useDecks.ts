import { IDeck } from '@/models/IDeck';
import { useMemo } from 'react';

export const useDecks = (decks: IDeck[] | undefined, query: string): IDeck[] | undefined => {
  const searchDecks = useMemo(() => {
    return decks && decks.filter((deck) => deck.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, decks]);

  return searchDecks;
};
