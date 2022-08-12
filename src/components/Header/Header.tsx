import React from 'react';
import { BackLink } from '../UI/Links';
import Navigation from '../Navigation';
import cl from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <BackLink />
        <div className={cl.childrenBlock}>
          {children}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
