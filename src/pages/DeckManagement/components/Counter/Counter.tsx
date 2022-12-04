import Text from '@/components/ui/Text';
import { useAppSelector } from '@/hooks/redux';
import React from 'react';
import cl from './Counter.module.css';

const Counter: React.FC = () => {
  const { totalCards } = useAppSelector((state) => state.deckManagementReducer);

  return (
    <div className={cl.counter}>
      <span className={cl.line}></span>
      <Text className={cl.text}>{`Карточек: ${totalCards}`}</Text>
      <span className={cl.line}></span>
    </div>
  );
};

export default Counter;
