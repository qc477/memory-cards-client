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
      {/* {cards.map((card) => (
        <div>
          <p>{card.question}</p>
          <p>{card.answer}</p>
        </div>
      ))} */}
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
      <Card>
        <p>question</p>
        <p>answer</p>
      </Card>
    </div>
  );
};

export default CardsPreview;
