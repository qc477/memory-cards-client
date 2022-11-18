import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsPreview from './CardsPreview';
import Form from './Form';
import Main from './Main';

const AddDeck: React.FC = () => {
  const [cards, setCards] = useState([
    { question: 'name', answer: 'имя' },
    { question: 'car', answer: 'машина' },
    { question: 'ant', answer: 'муравей' },
    { question: 'home', answer: 'дом' },
    { question: 'dog', answer: 'собака' },
    { question: 'cat', answer: 'кот, кошка' },
    { question: 'pencil', answer: 'карандаш' },
    { question: 'phone', answer: 'телефон' },
    { question: 'finger', answer: 'палец на руке' },
    { question: 'smile', answer: 'улыбка' },
  ]);
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
    </Main>
  );
};

export default AddDeck;
