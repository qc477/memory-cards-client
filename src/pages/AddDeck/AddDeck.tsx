import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsPreview from './CardsPreview';
import CreateButton from './CreateButton';
import Form from './Form';
import Main from './Main';

const AddDeck: React.FC = () => {
  const [cards, setCards] = useState([]);
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Main>
      <Form />
      <CardsPreview cards={cards} />
      <CreateButton />
    </Main>
  );
};

export default AddDeck;
