import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const PlayButton: React.FC = () => {
  return (
    <button className={cl.button}>
      <Icons className={cl.icon} name='play' />
    </button>
  );
};

export default PlayButton;
