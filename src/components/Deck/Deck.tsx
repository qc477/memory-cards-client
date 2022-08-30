import React from 'react';
import { MoreButton, PlayButton } from '../UI/Buttons';
import cl from './Deck.module.css';

const Deck: React.FC = () => {
  return (
    <article className={cl.deck}>
      <div className={cl.wrapper}>
        <div className={cl.top}>
          <h3 className={cl.title}>Англо - Русский словарь</h3>
          <MoreButton />
        </div>
        <div className={cl.middle}>
          <p className={cl.infoText}>Всего слов: 10000</p>
          <p className={cl.infoText}>Упражнений: 23</p>
        </div>
        <div className={cl.bottom}>
          <div className={cl.statistics}>
            <ul className={cl.statisticsList}>
              <li className={cl.statisticsItem}>A: 9K</li>
              <li className={cl.statisticsItem}>B: 450</li>
              <li className={cl.statisticsItem}>C: 200</li>
              <li className={cl.statisticsItem}>D: 250</li>
              <li className={cl.statisticsItem}>E: 100</li>
            </ul>
          </div>
          <time className={cl.date} dateTime='2022-07-20'>20.07.22</time>
          <PlayButton />
        </div>
      </div>
    </article>
  );
};

export default Deck;
