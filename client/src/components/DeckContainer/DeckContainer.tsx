import { IDeck } from 'models/IDeck';
import React from 'react';
import Deck from '../Deck';
import cl from './DeckContainer.module.css';

interface DeckContainerProps {
  decks: IDeck[] | undefined;
}

const DeckContainer: React.FC<DeckContainerProps> = ({ decks }) => {
  return (
    <div className={cl.deckContainer}>
      {decks &&
        decks.map((deck) => (
          <Deck
            key={deck.id}
            id={deck.id}
            title={deck.title}
            totalCards={deck.totalCards}
            totalExercises={deck.totalExercises}
            dateLastExercise={deck.dateLastExercise}
          />
        ))}
    </div>
  );
};

export default DeckContainer;
