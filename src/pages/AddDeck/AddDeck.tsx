import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
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

  return (
    <main className={cl.main}>
      <div className={cl.wrapper}>
        <Input placeholder='Название' clearButton />
      </div>
      <div className={cl.btnBox}>
        <Button size='big'>Создать</Button>
      </div>
    </main>
  );
};

export default AddDeck;
