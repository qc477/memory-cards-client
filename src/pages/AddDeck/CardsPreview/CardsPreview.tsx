import Card from '@/components/UI/Card';
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
          <p>{card.question}</p>
          <p>{card.answer}</p>
        </Card>
      ))}
    </div>
  );
};

export default CardsPreview;
