import React from 'react';
import { useDispatch } from 'react-redux';
import { menuSlice } from '../../../store/reducers/MenuSlice';
import Icons from 'components/Icons';
import cl from './Buttons.module.css';

const MenuButton: React.FC = () => {
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  function openMenu() {
    dispatch(setIsOpen(true));
  }

  return (
    <button className={cl.button} onClick={openMenu}>
      <Icons className={cl.icon} name='menu' />
    </button>
  );
};

export default MenuButton;
