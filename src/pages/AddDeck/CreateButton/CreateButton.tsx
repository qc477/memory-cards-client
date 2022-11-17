import Button from '@/components/UI/Button';
import React from 'react';
import cl from './CreateButton.module.css';

const CreateButton: React.FC = () => {
  return (
    <div className={cl.createButton}>
      <Button size='big'>Создать</Button>
    </div>
  );
};

export default CreateButton;
