import Card from '@/components/UI/Card';
import Text from '@/components/UI/Text';
import React from 'react';
import cl from './CardsPreview.module.css';

type Card = {
  question: string;
  answer: string;
};

interface CardsPreviewProps {
  cards: Card[];
}

const CardsPreview: React.FC<CardsPreviewProps> = ({ cards }) => {
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
