import { useAppSelector } from '@/hooks/redux';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Icons from '../Icons';
import Navigation from '../Navigation';
import IconButton from '../UI/IconButton';
import Title from '../UI/Title';
import cl from './Menu.module.css';

const Menu: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  function close(): void {
    dispatch(setIsOpen(false));
  }

  return (
    <div className={isOpen ? `${cl.menu} ${cl.open}` : cl.menu} onClick={close}>
      <div className={isOpen ? `${cl.menuContent} ${cl.open}` : cl.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.menuHeader}>
          <Title text='MemoryCards' />
          <IconButton color='faintStrongDown' _onClick={close}>
            <Icons name='close' />
          </IconButton>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Menu;
