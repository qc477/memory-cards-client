import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { useDispatch } from 'react-redux';
import { menuSlice } from '../../store/reducers/MenuSlice';
import Title from '../Title';
import IconButton from '../UI/IconButton';
import Icons from '../Icons';
import cl from './Header.module.css';

const Header: React.FC = () => {
  const { titleText } = useAppSelector((state) => state.headerReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  function openMenu(): void {
    dispatch(setIsOpen(true));
  }

  return (
    <header className={cl.header}>
      <div className={cl.body}>
        <IconButton color='dark' _onClick={openMenu}>
          <Icons name='menu' />
        </IconButton>
        <Title text={titleText} />
        <IconButton color='dark'>
          <Icons name='add' />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
