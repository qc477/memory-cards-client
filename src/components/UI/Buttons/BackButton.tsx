import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

interface BackButtonProps {
  isVisible?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ isVisible = false }) => {
  return (
    <button className={isVisible ? cl.button : cl.hideButton}>
      <Icons className={cl.icon} name='arrow-left' width='28' height='28' />
    </button>
  );
};

export default BackButton;
