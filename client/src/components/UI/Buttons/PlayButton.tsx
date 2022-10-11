import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const PlayButton: React.FC = () => {
  return (
    <button className={`${cl.button} ${cl.playButton}`}>
      <Icons className={cl.icon} name='play' />
      Упражнение
    </button>
  );
};

export default PlayButton;
