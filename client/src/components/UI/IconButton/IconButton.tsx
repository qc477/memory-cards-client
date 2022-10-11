import React from 'react';
import cl from './IconButton.module.css';

enum Colors {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IconButtonProps {
  children: React.ReactNode;
  color?: string;
  _onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, color, _onClick }) => {
  switch (color) {
    case Colors.LIGHT:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.light}`}>
          {children}
        </button>
      );
    case Colors.DARK:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.dark}`}>
          {children}
        </button>
      );
    default:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.dark}`}>
          {children}
        </button>
      );
  }
};

export default IconButton;
