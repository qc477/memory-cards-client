import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useTextField } from '@/hooks/useTextField';
import { ICard } from '@/models/ICard';
import { deckManagementSlice } from '@/store/reducers/DeckManagementSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Counter from '../Counter';
import cl from './FormCreatingCard.module.css';

const FormCreatingCard: React.FC = () => {
  const [cardId, setCardId] = useState<number>(0);
  const { setReadingFile, setCards } = deckManagementSlice.actions;
  const question = useTextField('', { isEmpty: true });
  const answer = useTextField('', { isEmpty: true });
  const dispatch = useDispatch();

  const add = () => {
    setCardId(cardId + 1);
    dispatch(setCards([{ id: cardId, question: question.value, answer: answer.value }]));
    question.onClear();
    answer.onClear();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();
    const reBase = /Q:\s*.+\s*A:\s*.+/gm;

    if (file) {
      reader.readAsText(file);
    }

    reader.onload = () => {
      const fileContent = typeof reader.result === 'string' ? reader.result : '';

      let coincidence;
      const cards = [];
      let counter = cardId;

      while ((coincidence = reBase.exec(fileContent)) !== null) {
        const splitStr = coincidence[0].split(/(Q:|A:)/g);
        const card: ICard = {
          id: counter,
          question: splitStr[splitStr.length - 3].replace(/^\s+|\s+$/g, ''),
          answer: splitStr[splitStr.length - 1].replace(/^\s+|\s+$/g, ''),
        };
        cards.push(card);
        counter++
      }

      dispatch(setReadingFile(false));
      dispatch(setCards(cards));
      setCardId(cardId + cards.length)
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
          <input onChange={onChange} type='file' accept='text/plain' />
          <Button variant='text' disabled={question.valid.isEmpty || answer.valid.isEmpty ? true : false} onClick={add}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreatingCard;
