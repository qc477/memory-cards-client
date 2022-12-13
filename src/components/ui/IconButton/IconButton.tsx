import clsx from 'clsx';
import React from 'react';
import cl from './IconButton.module.css';

type Color = 'faintStrong' | 'faintStrongDown' | 'faintStrongTextDown';

interface IconButtonProps {
  className?: string;
  children: React.ReactElement;
  color?: Color;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ className, children, color, onClick }) => {
  const styles = clsx([cl.baseStyles, className], {
    [cl.faintStrong]: color === 'faintStrong',
    [cl.faintStrongDown]: color === 'faintStrongDown',
    [cl.faintStrongTextDown]: color === 'faintStrongTextDown',
  });

  return (
    <button className={styles} onClick={onClick}>
      {React.cloneElement(children, { className: cl.icon })}
    </button>
  );
};

export default IconButton;
