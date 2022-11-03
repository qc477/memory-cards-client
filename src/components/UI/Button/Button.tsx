import React from 'react';
import cl from './Button.module.css';

interface ButtonProps {
  startIcon?: React.ReactNode;
  children?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ startIcon, children, disabled = false }) => {
  return (
    <button
      className={disabled ? `${cl.button} ${cl.disabled}` : `${cl.button} ${cl.active}`}
      type='button'
      disabled={disabled}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
