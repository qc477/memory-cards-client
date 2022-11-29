import { useAppSelector } from '@/hooks/redux';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from '../Navigation';
import Body from './Body';
import Wrapper from './Wrapper';
import Header from './Header';

const Menu: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  const close = (): void => {
    dispatch(setIsOpen(false));
  };

  return (
    <Wrapper isOpen={isOpen} onClick={close}>
      <Body isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Header onClose={close} />
        <Navigation />
      </Body>
    </Wrapper>
  );
};

export default Menu;
