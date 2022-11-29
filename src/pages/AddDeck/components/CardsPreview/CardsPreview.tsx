import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';
import { useAppSelector } from '@/hooks/redux';
import { pageAddDeckSlice } from '@/store/reducers/PageAddDeckSlice';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import cl from './CardsPreview.module.css';

const CardsPreview: React.FC = () => {
  const { cards } = useAppSelector((state) => state.pageAddDeckReducer);
  const { setCardsCounter } = pageAddDeckSlice.actions;
  const dispatch = useDispatch();

  useMemo(() => dispatch(setCardsCounter(cards.length)), [cards]);

  return (
    <div className={cl.cardsPreview}>
      {cards.map((card) => (
        <Card>
          <div className={cl.wrapper}>
            <Text>{card.question}</Text>
            <span className={cl.separator}></span>
            <Text>{card.answer}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardsPreview;