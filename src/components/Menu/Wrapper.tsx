import clsx from 'clsx';
import React from 'react';
import cl from './Menu.module.css';

interface WrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const Wrapper: React.FC<WrapperProps> = ({ children, isOpen, onClick }) => {
  const styles = clsx(cl.wrapper, { [cl.open]: isOpen });

  return (
    <div className={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export default Wrapper;
