import React from 'react';
import { MoreButton, PlayButton } from '../UI/Buttons';
import { IDeck } from '../../models/IDeck';
import Title from '../Title';
import cl from './Deck.module.css';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise }) => {
  return (
    <article className={cl.deck}>
      <div className={cl.wrapper}>
        <div className={cl.top}>
          <Title type='h3' text={title} />
          <MoreButton />
        </div>
        <div className={cl.middle}>
          <p className={cl.infoText}>Всего слов: {totalCards}</p>
          <p className={cl.infoText}>Упражнений: {totalExercises}</p>
        </div>
        <div className={cl.bottom}>
          <time className={cl.date} dateTime={dateLastExercise}>
            {dateLastExercise}
          </time>
          <PlayButton />
        </div>
      </div>
    </article>
  );
};

export default Deck;
