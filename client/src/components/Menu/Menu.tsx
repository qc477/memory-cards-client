import React from 'react';
import { useAppSelector } from 'hooks/redux';
import cl from './Menu.module.css';

const Menu: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);

  return (
    <div className={isOpen ? cl.menuOpen : cl.menuClose}>
      <div className={cl.menuWrapper}>
        <nav className={cl.menu}>
          <div className={cl.menuHeader}>
            <p className={cl.menuTitle}>Меню</p>
          </div>
          <ul className={cl.menuList}>
            <li className={cl.menuItem}>account</li>
            <li className={cl.menuItem}>settings</li>
            <li className={cl.menuItem}>about</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
