import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const CloseButton: React.FC = () => {
  return (
    <button className={cl.button}>
      <Icons className={cl.icon} name='close' />
    </button>
  );
};

export default CloseButton;
