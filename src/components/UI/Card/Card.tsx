import clsx from 'clsx';
import React from 'react';
import cl from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const styles = clsx([cl.card, className]);

  return <article className={styles}>{children}</article>;
};

export default Card;
