import Label from '@/components/UI/Label';
import Title from '@/components/UI/Title';
import React from 'react';
import cl from './Separator.module.css';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <div className={cl.separator}>
      <span className={cl.line}></span>
      <Title className={cl.title} size='h2'>
        {text}
      </Title>
      <span className={cl.line}></span>
      <Label text='0' />
      <span className={cl.line}></span>
    </div>
  );
};

export default Separator;
