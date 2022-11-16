import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from './Form';
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
      <Form />
    </Main>
  );
};

export default AddDeck;
