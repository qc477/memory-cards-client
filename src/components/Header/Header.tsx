import Icons from 'components/Icons';
import React from 'react';
import cl from './Header.module.css';

interface HeaderProps {
  isBackBtn?: boolean;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isBackBtn = false, children }) => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <Icons className={cl.backButton} name='arrow-left' width='24.5' height='28' />
        <div className={cl.childrenBlock}>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
