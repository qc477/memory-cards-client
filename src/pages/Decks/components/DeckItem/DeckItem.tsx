import Icons from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import DateTime from '@/components/ui/DateTime';
import IconButton from '@/components/ui/IconButton';
import Label from '@/components/ui/Label';
import Title from '@/components/ui/Title';
import { IDeck } from '@/models/IDeck';
import React from 'react';
import styles from './DeckItem.module.css';

const DeckItem: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groups }) => {
  const isDisabledButton = totalCards === 0 ? true : false;

  return (
    <div className={styles.deck}>
      <div className={styles.deckHeader}>
        <Title className={styles.deckTitle} type='h2'>
          {title}
        </Title>
        <IconButton color='faintStrongTextDown'>
          <Icons name='more' />
        </IconButton>
      </div>
      <div className={styles.deckBody}>
        <p className={styles.deckLabel}>Карточек: {totalCards}</p>
        <p className={styles.deckLabel}>Упражнений: {totalExercises}</p>
      </div>
      <div className={styles.deckFooter}>
        <div className={styles.deckInfoBlock}>
          {groups.map((group) => (
            <Label key={group.groupId} text={`${group.name.toUpperCase()}: ${group.totalCards}`} color='success' />
          ))}
        </div>
        <div className={styles.deckWrapper}>
          {dateLastExercise === null ? <Label text='New' color='critical' /> : <DateTime dateTime={dateLastExercise} />}
          <Button startIcon={<Icons name='play' />} disabled={isDisabledButton}>
            Упражнение
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeckItem;
