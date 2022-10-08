import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { AddButton, MenuButton } from '../UI/Buttons';
import Title from '../Title';
import cl from './Header.module.css';

const Header: React.FC = () => {
  const { titleText } = useAppSelector((state) => state.headerReducer);

  return (
    <header className={cl.header}>
      <div className={cl.body}>
        <MenuButton />
        <Title text={titleText} />
        <AddButton />
      </div>
    </header>
  );
};

export default Header;
