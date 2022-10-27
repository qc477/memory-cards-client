import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import cl from './Navigation.module.css';

enum NavigationPath {
  DECKS = 'decks',
  SETTINGS = 'settings',
  ABOUT = 'about',
  DONATION = 'donation',
  SOURCE_CODE = 'https://github.com/qc477/OpenMemoryCards',
}

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={cl.navList}>
        <li className={cl.navItem}>
          <NavLink to={NavigationPath.DECKS} className={cl.navLink}>
            <Icons className={cl.navIcon} name='account' />
            Колоды
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={NavigationPath.SETTINGS} className={cl.navLink}>
            <Icons className={cl.navIcon} name='settings' />
            Настройки
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={NavigationPath.ABOUT} className={cl.navLink}>
            <Icons className={cl.navIcon} name='info' />О приложении
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={NavigationPath.DONATION} className={cl.navLink}>
            <Icons className={cl.navIcon} name='monetization' />
            Поддержать проект
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <a href={NavigationPath.SOURCE_CODE} className={cl.navLink}>
            <Icons className={cl.navIcon} name='code' />
            Исходный код
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
