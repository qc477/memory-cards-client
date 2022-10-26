import React from 'react';
import { IDeck } from 'models/IDeck';
import Deck from 'components/Deck';
import cl from './DeckContainer.module.css';
import Card from 'components/UI/Card';

interface DeckContainerProps {
  decks: IDeck[] | undefined;
}

const DeckContainer: React.FC<DeckContainerProps> = ({ decks }) => {
  return (
    <div className={cl.deckContainer}>
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
  );
};

export default DeckContainer;
