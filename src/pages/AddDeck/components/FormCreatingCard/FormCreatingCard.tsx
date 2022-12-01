import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useAppSelector } from '@/hooks/redux';
import { useTextField } from '@/hooks/useTextField';
import { pageAddDeckSlice } from '@/store/reducers/PageAddDeckSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Counter from '../Counter';
import cl from './FormCreatingCard.module.css';

const FormCreatingCard: React.FC = () => {
  const { totalCards } = useAppSelector((state) => state.pageAddDeckReducer);
  const { setCards } = pageAddDeckSlice.actions;
  const question = useTextField('', { isEmpty: true });
  const answer = useTextField('', { isEmpty: true });
  const dispatch = useDispatch();

  const add = () => {
    dispatch(setCards({ question: question.value, answer: answer.value }));
    question.onClear();
    answer.onClear();
  };

  return (
    <div className={cl.formWrapper}>
      <Counter totalCards={totalCards} />
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
          <Button variant='text'>Импортировать из файла</Button>
          <Button variant='text' disabled={question.valid.isEmpty || answer.valid.isEmpty ? true : false} onClick={add}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreatingCard;
