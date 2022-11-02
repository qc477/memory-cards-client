import React from 'react';
import cl from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <article className={cl.card}>{children}</article>;
};

export default Card;
