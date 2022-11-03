import React from 'react';
import { IDeck } from 'models/IDeck';
import Title from 'components/Title';
import IconButton from 'components/UI/IconButton';
import Icons from 'components/Icons';
import Button from 'components/UI/Button';
import cl from './Deck.module.css';
import Label from 'components/UI/Label';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groups }) => {
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
        <div className={cl.deckInfoBlock}>
          {totalCards === 0 ? (
            <Label text='Черновик' color='grayStrong' />
          ) : (
            groups.map((group) => (
              <Label key={group.id} text={`${group.name.toUpperCase()}: ${group.totalCards}`} color='grayWeak' />
            ))
          )}
        </div>
        <div className={cl.deckWrapper}>
          {dateLastExercise === null ? (
            <Label text='New' color='critical' />
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
