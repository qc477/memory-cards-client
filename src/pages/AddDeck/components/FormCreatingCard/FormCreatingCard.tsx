import TextButton from '@/components/ui/TextButton';
import TextField from '@/components/ui/TextField';
import { useAppSelector } from '@/hooks/redux';
import { pageAddDeckSlice } from '@/store/reducers/PageAddDeckSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Subtitle from '../Subtitle';
import cl from './FormCreatingCard.module.css';

const FormCreatingCard: React.FC = () => {
  const { cardsCounter } = useAppSelector((state) => state.pageAddDeckReducer);
  const { setCards } = pageAddDeckSlice.actions;
  const [questionValue, setQuestionValue] = useState<string>('');
  const [answerValue, setAnswerValue] = useState<string>('');
  const dispatch = useDispatch();

  const add = () => {
    dispatch(setCards({ question: questionValue, answer: answerValue }));
    setQuestionValue('');
    setAnswerValue('');
  };

  return (
    <div className={cl.formWrapper}>
      <Subtitle text='Карточки' cardsCounter={cardsCounter} />
      <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          value={questionValue}
          placeholder='Вопрос'
          onChange={(e) => setQuestionValue(e.target.value)}
          onClear={() => setQuestionValue('')}
        />
        <TextField
          value={answerValue}
          placeholder='Ответ'
          onChange={(e) => setAnswerValue(e.target.value)}
          onClear={() => setAnswerValue('')}
        />
        <div className={cl.buttonsWrapper}>
          <TextButton>Импортировать из файла</TextButton>
          <TextButton onClick={add}>Добавить</TextButton>
        </div>
      </form>
    </div>
  );
};

export default FormCreatingCard;
