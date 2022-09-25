import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { BackButton } from '../UI/Buttons';
import Navigation from '../Navigation';
import cl from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const {isShowBackButton} = useAppSelector(state => state.headerReducer)

  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <BackButton isVisible={isShowBackButton}/>
        <div className={cl.childrenBlock}>
          {children}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
