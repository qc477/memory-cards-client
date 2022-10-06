import React from 'react';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const AddButton: React.FC = () => {
  return (
    <button className={cl.button} title='Добавить колоду'>
      <Icons className={cl.icon} name='add' />
    </button>
  );
};

export default AddButton;
