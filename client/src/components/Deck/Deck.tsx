import React from 'react';
import { IDeck } from 'models/IDeck';
import Title from 'components/Title';
import IconButton from 'components/UI/IconButton';
import Icons from 'components/Icons';
import Button from 'components/UI/Button';
import LabelNew from 'components/LabelNew';
import GroupStatistics from 'components/GroupStatistics';
import cl from './Deck.module.css';

const Deck: React.FC<IDeck> = ({ id, title, totalCards, totalExercises, dateLastExercise, groupStatistics }) => {
  return (
    <article className={cl.deck}>
      <div className={cl.wrapper}>
        <div className={cl.top}>
          <Title type='h2' text={title} />
          <IconButton color='faintStrongTextDown'>
            <Icons name='more' />
          </IconButton>
        </div>
        <div className={cl.middle}>
          <p className={cl.infoText}>Карточек: {totalCards}</p>
          <p className={cl.infoText}>Упражнений: {totalExercises}</p>
        </div>
        <div className={cl.bottom}>
          <div className={cl.bottomLeft}>
            <GroupStatistics labels={groupStatistics} />
          </div>
          <div className={cl.bottomRigth}>
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
    </article>
  );
};

export default Deck;
