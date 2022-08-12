import React from 'react';
import { BackButton } from '../UI/Buttons';
import Navigation from '../Navigation';
import cl from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <BackButton />
        <div className={cl.childrenBlock}>
          {children}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
