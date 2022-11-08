import { useAppSelector } from '@/hooks/redux';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Icons from '../Icons';
import Title from '../Title';
import IconButton from '../UI/IconButton';
import cl from './Header.module.css';

const Header: React.FC = () => {
  const { titleText } = useAppSelector((state) => state.headerReducer);
  const { isScrollY } = useAppSelector((state) => state.appReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  function openMenu(): void {
    dispatch(setIsOpen(true));
  }

  return (
    <header className={isScrollY ? `${cl.header} ${cl.scroll}` : cl.header}>
      <div className={cl.body}>
        <IconButton color='faintStrong' _onClick={openMenu}>
          <Icons name='menu' />
        </IconButton>
        <Title text={titleText} />
        <IconButton color='faintStrong'>
          <Icons name='add' />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
