import Button from '@/components/UI/Button';
import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsPreview from './CardsPreview';
import Form from './Form';
import Main from './Main';

const AddDeck: React.FC = () => {
  const [cards, setCards] = useState([])
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <Main>
      <Form />
      <CardsPreview cards={cards} />
      <Button size='big'>Создать</Button>
    </Main>
  );
};

export default AddDeck;
