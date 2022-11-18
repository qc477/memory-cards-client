import Input from '@/components/UI/Input';
import TextButton from '@/components/UI/TextButton';
import React from 'react';
import Subtitle from '../Subtitle';
import cl from './FormCreatingCard.module.css';

interface FormCreatingCardProps {
  cardsCounter: number;
}

const FormCreatingCard: React.FC<FormCreatingCardProps> = ({ cardsCounter }) => {
  return (
    <div className={cl.formWrapper}>
      <Subtitle text='Карточки' cardsCounter={cardsCounter} />
      <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
        <Input placeholder='Вопрос' />
        <Input placeholder='Ответ' />
        <div className={cl.buttonsWrapper}>
          <TextButton>Импортировать из файла</TextButton>
          <TextButton>Добавить</TextButton>
        </div>
      </form>
    </div>
  );
};

export default FormCreatingCard;
