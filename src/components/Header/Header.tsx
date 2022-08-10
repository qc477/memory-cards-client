import React from 'react';
import cl from './Header.module.css';

interface HeaderProps {
  isBackBtn?: boolean;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isBackBtn = 'false', children }) => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <div className={cl.childrenBlock}>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
