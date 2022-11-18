import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import TextButton from '@/components/UI/TextButton';
import React from 'react';
import Separator from '../Separator';
import cl from './Form.module.css';

interface FormProps {
  method?: string;
}

const Form: React.FC<FormProps> = ({ method }) => {
  return (
    <form className={cl.form} method={method} onSubmit={(e) => e.preventDefault()}>
      <div className={cl.column}>
        <Input placeholder='Название' clearButton />
        <div className={cl.buttonBox}>
          <Button>Создать</Button>
        </div>
      </div>
      <Separator text='Карточки' />
      <Input placeholder='Вопрос' clearButton />
      <Input placeholder='Ответ' clearButton />
      <div className={cl.row}>
        <TextButton>Импортировать из файла</TextButton>
        <TextButton>Добавить</TextButton>
      </div>
    </form>
  );
};

export default Form;
