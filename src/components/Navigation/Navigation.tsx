import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import cl from './Navigation.module.css';

enum NavigationPath {
  DECKS = 'decks',
  SETTINGS = 'settings',
  ABOUT = 'about',
  DONATION = 'donation',
  SOURCE_CODE = 'https://github.com/qc477/MemoryCards',
}

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={cl.navList}>
        <li>
          <NavLink
            to={NavigationPath.DECKS}
            className={({ isActive }) => (isActive ? `${cl.navLink} ${cl.active}` : cl.navLink)}
          >
            <Icons className={cl.navIcon} name='hline' />
            Колоды
          </NavLink>
        </li>
        <li>
          <NavLink
            to={NavigationPath.SETTINGS}
            className={({ isActive }) => (isActive ? `${cl.navLink} ${cl.active}` : cl.navLink)}
          >
            <Icons className={cl.navIcon} name='settings' />
            Настройки
          </NavLink>
        </li>
        <li>
          <NavLink
            to={NavigationPath.ABOUT}
            className={({ isActive }) => (isActive ? `${cl.navLink} ${cl.active}` : cl.navLink)}
          >
            <Icons className={cl.navIcon} name='info' />О приложении
          </NavLink>
        </li>
        <li>
          <NavLink to={NavigationPath.DONATION} className={cl.navLink}>
            <Icons className={cl.navIcon} name='monetization' />
            Поддержать проект
          </NavLink>
        </li>
        <li>
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
