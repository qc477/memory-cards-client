import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';
import { useAppSelector } from '@/hooks/redux';
import { deckManagementSlice } from '@/store/reducers/DeckManagementSlice';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import cl from './CardsPreview.module.css';

const CardsPreview: React.FC = () => {
  const { cards } = useAppSelector((state) => state.deckManagementReducer);
  const { setTotalCards } = deckManagementSlice.actions;
  const dispatch = useDispatch();

  useMemo(() => dispatch(setTotalCards(cards.length)), [cards]);

  return (
    <div className={cl.cardsPreview}>
      {cards.map((card, index) => (
        <Card key={index}>
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
