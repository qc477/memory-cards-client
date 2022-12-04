import Text from '@/components/ui/Text';
import React from 'react';
import cl from './Counter.module.css';

interface CounterProps {
  totalCards: number;
}

const Counter: React.FC<CounterProps> = ({ totalCards }) => {
  return (
    <div className={cl.counter}>
      <span className={cl.line}></span>
      <Text className={cl.text}>{`Карточек: ${totalCards}`}</Text>
      <span className={cl.line}></span>
    </div>
  );
};

export default Counter;
