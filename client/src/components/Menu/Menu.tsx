import React from 'react';
import { useAppSelector } from 'hooks/redux';
import Title from '../Title';
import { CloseButton } from '../UI/Buttons';
import cl from './Menu.module.css';

const Menu: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);

  return (
    <div className={isOpen ? cl.menuOpen : cl.menuClose}>
      <div className={cl.menuWrapper}>
        <div className={cl.menu}>
          <div className={cl.menuHeader}>
            <Title text='Меню' />
            <CloseButton />
          </div>
          <ul className={cl.menuList}>
            <li className={cl.menuItem}>account</li>
            <li className={cl.menuItem}>settings</li>
            <li className={cl.menuItem}>about</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
