import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const BackButton: React.FC = () => {
  return (
    <button className={cl.button}>
      <Icons className={cl.icon} name='arrow-left' width='28' height='28'/>
    </button>
  )
}

export default BackButton;
