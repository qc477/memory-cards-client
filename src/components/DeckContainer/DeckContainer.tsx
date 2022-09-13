import React from 'react';
import Deck from '../Deck';
import { deckAPI } from '../../services/DeckService';
import cl from './DeckContainer.module.css';

const DeckContainer: React.FC = () => {
  const { data: decks } = deckAPI.useFetchAllDecksQuery('');
  return (
    <div className={cl.deckContainer}>
      {decks && decks.map((deck) => (
        <Deck key={deck.id} />
      ))}
    </div>
  );
};

export default DeckContainer;
