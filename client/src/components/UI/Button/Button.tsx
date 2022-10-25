import React from 'react';
import cl from './Button.module.css';

interface ButtonProps {
  startIcon?: React.ReactNode;
  children?: string;
}

const Button: React.FC<ButtonProps> = ({ startIcon, children }) => {
  return (
    <button className={cl.button} type='button'>
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
