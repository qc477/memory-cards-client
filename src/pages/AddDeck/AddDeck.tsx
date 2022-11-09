import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AddDeck.module.css';

const AddDeck: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));
  }, []);

  return <main className={cl.main}>New Deck</main>;
};

export default AddDeck;
