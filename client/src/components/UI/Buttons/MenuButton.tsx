import Icons from 'components/Icons';
import React from 'react';
import cl from './Buttons.module.css';

const MenuButton: React.FC = () => {
  return (
    <button className={cl.button}>
      <Icons className={cl.icon} name='menu'/>
    </button>
  );
};

export default MenuButton;
