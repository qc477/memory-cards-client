import React from 'react';
import { IDeck } from 'models/IDeck';
import Title from 'components/Title';
import IconButton from 'components/UI/IconButton';
import Icons from 'components/Icons';
import Button from 'components/UI/Button';
import cl from './Deck.module.css';
import Label from 'components/UI/Label';
import DateTime from 'components/UI/DateTime';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groups }) => {
  const isDisabledButton = totalCards === 0 ? true : false;

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
          {groups.map((group) => (
            <Label key={group.id} text={`${group.name.toUpperCase()}: ${group.totalCards}`} color='success' />
          ))}
        </div>
        <div className={cl.deckWrapper}>
          {dateLastExercise === null ? <Label text='New' color='critical' /> : <DateTime dateTime={dateLastExercise} />}
          <Button startIcon={<Icons name='play' />} disabled={isDisabledButton}>
            Упражнение
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
