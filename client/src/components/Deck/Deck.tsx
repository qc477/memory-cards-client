import React from 'react';
import { MoreButton, PlayButton } from '../UI/Buttons';
import { IDeck } from '../../models/IDeck';
import cl from './Deck.module.css';

const Deck: React.FC<IDeck> = ({ id, title, totalWords, totalExercises, groups }) => {
  return (
    <article className={cl.deck}>
      <div className={cl.wrapper}>
        <div className={cl.top}>
          <h3 className={cl.title}>{title}</h3>
          <MoreButton />
        </div>
        <div className={cl.middle}>
          <p className={cl.infoText}>Всего слов: {totalWords}</p>
          <p className={cl.infoText}>Упражнений: {totalExercises}</p>
        </div>
        <div className={cl.bottom}>
          <div className={cl.statistics}>
            <ul className={cl.statisticsList}>
              {groups.map((group) => (
                <li key={group.id} className={cl.statisticsItem}>
                  {group.name.toUpperCase()}: {group.wordCount}
                </li>
              ))}
            </ul>
          </div>
          <time className={cl.date} dateTime='2022-07-20'>
            20.07.22
          </time>
          <PlayButton />
        </div>
      </div>
    </article>
  );
};

export default Deck;
