import Icons from '@Components/Icons';
import Navigation from '@Components/Navigation';
import Title from '@Components/Title';
import IconButton from '@Components/UI/IconButton';
import { useAppSelector } from '@Hooks/redux';
import { menuSlice } from '@Store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
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
