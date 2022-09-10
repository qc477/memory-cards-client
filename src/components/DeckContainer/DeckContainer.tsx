import React from "react";
import Deck from "../Deck";
import cl from './DeckContainer.module.css';

const DeckContainer: React.FC = () => {
  return (
    <div className={cl.deckContainer}>
      <Deck />
    </div>
  )
}

export default DeckContainer;
