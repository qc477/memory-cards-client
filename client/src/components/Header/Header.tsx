import React from 'react';
import cl from './Header.module.css';
import { AddButton, MenuButton } from '../UI/Buttons';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={cl.header}>
      <div className={cl.body}>
        <MenuButton />
        {children}
        <AddButton />
      </div>
    </header>
  );
};

export default Header;
