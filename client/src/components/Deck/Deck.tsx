import React from 'react';
import { IDeck } from 'models/IDeck';
import Title from 'components/Title';
import IconButton from 'components/UI/IconButton';
import Icons from 'components/Icons';
import Button from 'components/UI/Button';
import LabelNew from 'components/LabelNew';
import Groups from 'components/Groups';
import cl from './Deck.module.css';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groupStatistics }) => {
  return (
    <div className={cl.deck}>
      <div className={cl.deckHeader}>
        <Title type='h2' text={title} />
        <IconButton color='faintStrongTextDown'>
          <Icons name='more' />
        </IconButton>
      </div>
      <div className={cl.deckBody}>
        <p className={cl.deckLabel}>Карточек: {totalCards}</p>
        <p className={cl.deckLabel}>Упражнений: {totalExercises}</p>
      </div>
      <div className={cl.deckFooter}>
        <Groups groups={groupStatistics} />
        <div className={cl.deckWrapper}>
          {dateLastExercise === null ? (
            <LabelNew />
          ) : (
            <time className={cl.date} dateTime={dateLastExercise}>
              {dateLastExercise}
            </time>
          )}
          <Button startIcon={<Icons name='play' />}>Упражнение</Button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
