import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useTextField } from '@/hooks/useTextField';
import { deckManagementSlice } from '@/store/reducers/DeckManagementSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Counter from '../Counter';
import cl from './FormCreatingCard.module.css';

const FormCreatingCard: React.FC = () => {
  const { setReadingFile, setCards, setCard } = deckManagementSlice.actions;
  const question = useTextField('', { isEmpty: true });
  const answer = useTextField('', { isEmpty: true });
  const dispatch = useDispatch();

  const add = () => {
    dispatch(setCard({ question: question.value, answer: answer.value }));
    question.onClear();
    answer.onClear();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsText(file);
    }

    reader.onload = () => {
      const content = JSON.parse(JSON.parse(JSON.stringify(reader.result)));
      dispatch(setReadingFile(false));
      dispatch(setCards(content));
    };

    reader.onloadstart = () => dispatch(setReadingFile(true));
  };

  return (
    <div className={cl.formWrapper}>
      <Counter />
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
          <input onChange={onChange} type='file' accept='application/json' />
          <Button variant='text' disabled={question.valid.isEmpty || answer.valid.isEmpty ? true : false} onClick={add}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreatingCard;
