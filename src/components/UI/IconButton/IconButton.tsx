import clsx from 'clsx';
import React from 'react';
import cl from './IconButton.module.css';

type Color = 'faintStrong' | 'faintStrongDown' | 'faintStrongTextDown';

interface IconButtonProps {
  children: React.ReactNode;
  color?: Color;
  _onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, color, _onClick }) => {
  const styles = clsx(cl.baseStyles, {
    [cl.faintStrong]: color === 'faintStrong',
    [cl.faintStrongDown]: color === 'faintStrongDown',
    [cl.faintStrongTextDown]: color === 'faintStrongTextDown',
  });

  return (
    <button className={styles} onClick={_onClick}>
      {children}
    </button>
  );
};

export default IconButton;
