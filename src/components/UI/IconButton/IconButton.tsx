import React from 'react';
import cl from './IconButton.module.css';

enum Colors {
  FAINT_STRONG = 'faintStrong',
  FAINT_STRONG_DOWN = 'faintStrongDown',
  FAINT_STRONG_TEXT_DOWN = 'faintStrongTextDown',
}

interface IconButtonProps {
  children: React.ReactNode;
  color?: string;
  _onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, color, _onClick }) => {
  switch (color) {
    case Colors.FAINT_STRONG:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.faintStrong}`}>
          {children}
        </button>
      );
    case Colors.FAINT_STRONG_DOWN:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.faintStrongDown}`}>
          {children}
        </button>
      );
    case Colors.FAINT_STRONG_TEXT_DOWN:
      return (
        <button onClick={_onClick} className={`${cl.baseStyles} ${cl.faintStrongTextDown}`}>
          {children}
        </button>
      );
    default:
      return (
        <button onClick={_onClick} className={cl.baseStyles}>
          {children}
        </button>
      );
  }
};

export default IconButton;
