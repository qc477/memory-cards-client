import Input from '@/components/UI/Input';
import React from 'react';
import cl from './Form.module.css';

interface FormProps {
  action: string;
  method?: string;
}

const Form: React.FC<FormProps> = ({ action, method }) => {
  return (
    <form className={cl.form} action={action} method={method}>
      <Input placeholder='Название' clearButton />
    </form>
  );
};

export default Form;
