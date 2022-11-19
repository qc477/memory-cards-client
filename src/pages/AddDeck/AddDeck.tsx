import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormCreatingDeck from './FormCreatingDeck';
import FormCreatingCard from './FormCreatingCard';
import CardsPreview from './CardsPreview';
import Main from './Main';

const AddDeck: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <Main>
      <FormCreatingDeck />
      <FormCreatingCard />
      <CardsPreview />
    </Main>
  );
};

export default AddDeck;
