import React from 'react';
import clsx from 'clsx';
import cl from './Button.module.css';

type Variant = 'default' | 'text';

interface ButtonProps {
  startIcon?: React.ReactNode;
  variant?: Variant;
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ startIcon, children, onClick, variant = 'default', disabled = false }) => {
  const styles = clsx(cl.button, {
    [cl.variantDefault]: variant === 'default',
    [cl.variantText]: variant === 'text',
    [cl.disabled]: disabled,
    [cl.active]: !disabled,
  });

  return (
    <button className={styles} type='button' disabled={disabled} onClick={onClick}>
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
