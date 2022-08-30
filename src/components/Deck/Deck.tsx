import React from 'react';
import { MoreButton } from '../UI/Buttons';
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
        <ol className={cl.statistics} type='A'>
          <li className={cl.statisticsItem}>9K</li>
          <li className={cl.statisticsItem}>450</li>
          <li className={cl.statisticsItem}>200</li>
          <li className={cl.statisticsItem}>250</li>
          <li className={cl.statisticsItem}>100</li>
        </ol>
      </div>
    </article>
  );
};

export default Deck;
