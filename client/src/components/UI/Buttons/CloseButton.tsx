import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

interface CloseButtonProps {
  _onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ _onClick }) => {
  return (
    <button className={cl.button} onClick={() => _onClick}>
      <Icons className={cl.icon} name='close' />
    </button>
  );
};

export default CloseButton;
