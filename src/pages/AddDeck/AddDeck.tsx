import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import Input from '@/components/UI/Input';
import TextButton from '@/components/UI/TextButton';
import Title from '@/components/UI/Title';
import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cl from './AddDeck.module.css';

interface CardsState {
  question: string;
  answer: string;
}

const AddDeck: React.FC = () => {
  const [cards, setCards] = useState<CardsState[]>([]);
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));
  }, []);

  const addCard = (question: string, answer: string) => {
    setCards((prevCards) => [...prevCards, { question: question, answer: answer }]);
  };

  return (
    <main className={cl.main}>
      <div className={cl.wrapper}>
        <div className={cl.innerBlock}>
          <Input placeholder='Название' clearButton />
          <div className={cl.titleBlock}>
            <span className={cl.line}></span>
            <Title className={cl.title} size='h2'>
              Карточки
            </Title>
            <span className={cl.line}></span>
            <span className={cl.counter}>0</span>
            <span className={cl.line}></span>
          </div>
          <Input placeholder='Вопрос' clearButton />
          <Input placeholder='Ответ' clearButton />
          <div className={cl.addBtnBox}>
            <TextButton onClick={() => addCard('question', 'answer')}>Добавить</TextButton>
          </div>
        </div>
        <div className={cl.cardsBlock}>
          {cards.map((card) => (
            <Card>
              <p>{card.question}</p>
              <p>{card.answer}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className={cl.btnBox}>
        <Button size='big'>Создать</Button>
      </div>
    </main>
  );
};

export default AddDeck;
