import { useAppSelector } from '@/hooks/redux';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Icons from '../Icons';
import Navigation from '../Navigation';
import IconButton from '../UI/IconButton';
import Title from '../UI/Title';
import cl from './Menu.module.css';
import Wrapper from './Wrapper';

const Menu: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  const close = (): void => {
    dispatch(setIsOpen(false));
  };

  return (
    <Wrapper isOpen={isOpen} onClick={close}>
      <div className={isOpen ? `${cl.menuContent} ${cl.open}` : cl.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.menuHeader}>
          <Title className={cl.menuTitle}>MemoryCards</Title>
          <IconButton color='faintStrongDown' onClick={close}>
            <Icons name='close' />
          </IconButton>
        </div>
        <Navigation />
      </div>
    </Wrapper>
  );
};

export default Menu;
