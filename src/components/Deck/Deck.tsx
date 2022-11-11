import { IDeck } from '@/models/IDeck';
import React from 'react';
import Icons from '../Icons';
import Button from '../UI/Button';
import DateTime from '../UI/DateTime';
import IconButton from '../UI/IconButton';
import Label from '../UI/Label';
import Title from '../UI/Title';
import cl from './Deck.module.css';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groups }) => {
  const isDisabledButton = totalCards === 0 ? true : false;

  return (
    <div className={cl.deck}>
      <div className={cl.deckHeader}>
        <Title className={cl.deckTitle} size='h2'>
          {title}
        </Title>
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
            <Label key={group.groupId} text={`${group.name.toUpperCase()}: ${group.totalCards}`} color='success' />
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
