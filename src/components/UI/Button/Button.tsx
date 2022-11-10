import React from 'react';
import { clsx } from 'clsx';
import cl from './Button.module.css';

type Size = 'small' | 'medium' | 'big';

interface ButtonProps {
  startIcon?: React.ReactNode;
  children?: string;
  disabled?: boolean;
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({ startIcon, children, size = 'medium', disabled = false }) => {
  const styles = clsx(cl.button, {
    [cl.small]: size === 'small',
    [cl.medium]: size === 'medium',
    [cl.big]: size === 'big',
    [cl.disabled]: disabled,
    [cl.active]: !disabled,
  });

  return (
    <button
      className={styles}
      type='button'
      disabled={disabled}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
