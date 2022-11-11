import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Title from '@/components/UI/Title';
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
        <div className={cl.innerBlock}>
          <Input placeholder='Название' clearButton />
          <div className={cl.titleBlock}>
            <span className={cl.lineStart}></span>
            <Title className={cl.title} size='h2'>
              Карточки
            </Title>
            <span className={cl.lineMiddle}></span>
            <span className={cl.counter}>0</span>
            <span className={cl.lineEnd}></span>
          </div>
          <Input placeholder='Вопрос' clearButton />
          <Input placeholder='Ответ' clearButton />
        </div>
      </div>
      <div className={cl.btnBox}>
        <Button size='big'>Создать</Button>
      </div>
    </main>
  );
};

export default AddDeck;
