import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import React from 'react';
import cl from './FormCreatingDeck.module.css';

const FormCreatingDeck: React.FC = () => {
  return (
    <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
      <Input placeholder='Название' />
      <div className={cl.buttonBox}>
        <Button>Создать</Button>
      </div>
    </form>
  );
};

export default FormCreatingDeck;
