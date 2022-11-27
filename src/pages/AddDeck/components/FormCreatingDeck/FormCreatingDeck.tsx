import Button from '@/components/UI/Button';
import TextField from '@/components/UI/TextField';
import { useAppSelector } from '@/hooks/redux';
import { pageAddDeckSlice } from '@/store/reducers/PageAddDeckSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import cl from './FormCreatingDeck.module.css';

const FormCreatingDeck: React.FC = () => {
  const { name } = useAppSelector((state) => state.pageAddDeckReducer);
  const { setName } = pageAddDeckSlice.actions;
  const dispatch = useDispatch();

  return (
    <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
      <TextField
        value={name}
        placeholder='Название'
        onChange={(e) => dispatch(setName(e.target.value))}
        onClear={() => dispatch(setName(''))}
      />
      <div className={cl.buttonBox}>
        <Button>Создать</Button>
      </div>
    </form>
  );
};

export default FormCreatingDeck;
