import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormCreatingDeck from './components/FormCreatingDeck';
import FormCreatingCard from './components/FormCreatingCard';
import CardsPreview from './components/CardsPreview';
import Main from './components/Main';

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
