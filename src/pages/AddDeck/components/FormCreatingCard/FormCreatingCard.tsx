import TextButton from '@/components/ui/TextButton';
import TextField from '@/components/ui/TextField';
import { useAppSelector } from '@/hooks/redux';
import { useTextField } from '@/hooks/useTextField';
import { pageAddDeckSlice } from '@/store/reducers/PageAddDeckSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Subtitle from '../Subtitle';
import cl from './FormCreatingCard.module.css';

const FormCreatingCard: React.FC = () => {
  const { cardsCounter } = useAppSelector((state) => state.pageAddDeckReducer);
  const { setCards } = pageAddDeckSlice.actions;
  const question = useTextField('');
  const answer = useTextField('');
  const dispatch = useDispatch();

  const add = () => {
    if (question.value.length === 0 || answer.value.length === 0) {
      alert('(!) Оба поля должны быть заполненты.');
    } else {
      dispatch(setCards({ question: question.value, answer: answer.value }));
      question.onClear();
      answer.onClear();
    }
  };

  return (
    <div className={cl.formWrapper}>
      <Subtitle text='Карточки' cardsCounter={cardsCounter} />
      <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          value={question.value}
          placeholder='Вопрос'
          onChange={(e) => question.onChange(e)}
          onClear={question.onClear}
        />
        <TextField
          value={answer.value}
          placeholder='Ответ'
          onChange={(e) => answer.onChange(e)}
          onClear={answer.onClear}
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
