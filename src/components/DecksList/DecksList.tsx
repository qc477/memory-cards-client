import React from "react";
import Deck from "../Deck";
import cl from './DecksList.module.css';

const DecksList: React.FC = () => {
  return (
    <div className={cl.decksList}>
      <Deck />
    </div>
  )
}

export default DecksList;
