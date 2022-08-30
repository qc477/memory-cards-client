import React from 'react';
import Icons from 'components/Icons';
import cl from './Buttons.module.css';

const MoreButton: React.FC = () => {
  return (
    <button className={`${cl.button} ${cl.buttonIconRight}`}>
      <Icons className={cl.icon} name='more' width='7' height='28' />
    </button>
  );
};

export default MoreButton;
