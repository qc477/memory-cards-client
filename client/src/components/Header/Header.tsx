import React from 'react';
import cl from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {

  return (
    <header className={cl.header}>
      <div className={cl.body}>
        <div className={cl.childrenBlock}>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
