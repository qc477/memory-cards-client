import React from "react";
import Deck from "../Deck";
import cl from './Decks.module.css';

const Decks: React.FC = () => {
  return (
    <div className={cl.decks}>
      <Deck />
    </div>
  )
}

export default Decks;
