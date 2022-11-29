import Label from '@/components/ui/Label';
import Title from '@/components/ui/Title';
import React from 'react';
import cl from './Subtitle.module.css';

interface SubtitleProps {
  text: string;
  cardsCounter: number;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, cardsCounter }) => {
  return (
    <div className={cl.subtitle}>
      <span className={cl.line}></span>
      <Title className={cl.text} type='h2'>
        {text}
      </Title>
      <span className={cl.line}></span>
      <Label text={cardsCounter.toString()} />
      <span className={cl.line}></span>
    </div>
  );
};

export default Subtitle;
