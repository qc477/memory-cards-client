import clsx from 'clsx';
import React from 'react';
import cl from './Menu.module.css';

interface BodyProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Body: React.FC<BodyProps> = ({ children, isOpen, onClick }) => {
  const styles = clsx(cl.body, { [cl.open]: isOpen });

  return (
    <div className={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export default Body;
