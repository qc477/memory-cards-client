import React from 'react';
import clsx from 'clsx';
import cl from './Button.module.css';

type Variant = 'default' | 'text';
type Color = 'default' | 'critic' | 'gray';

interface ButtonProps {
  startIcon?: React.ReactNode;
  variant?: Variant;
  color?: Color;
  className?: string;
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  startIcon,
  children,
  onClick,
  color = 'default',
  variant = 'default',
  disabled = false,
}) => {
  const styles = clsx([cl.button, className], {
    [cl.variantDefault]: variant === 'default',
    [cl.text]: variant === 'text' && color === 'default',
    [cl.textCritic]: variant === 'text' && color === 'critic',
    [cl.textGray]: variant === 'text' && color === 'gray',
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
