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
          <Text>{card.question}</Text>
          <Text>{card.answer}</Text>
        </Card>
      ))}
    </div>
  );
};

export default CardsPreview;
