import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useTextField } from '@/hooks/useTextField';
import React from 'react';
import cl from './FormCreatingDeck.module.css';

const FormCreatingDeck: React.FC = () => {
  const name = useTextField('', { isEmpty: true });

  const create = () => {};

  return (
    <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
      <TextField value={name.value} placeholder='Название' onChange={(e) => name.onChange(e)} onClear={name.onClear} />
      <div className={cl.buttonBox}>
        <Button disabled={name.valid.isEmpty ? true : false} onClick={create}>
          Создать
        </Button>
      </div>
    </form>
  );
};

export default FormCreatingDeck;
