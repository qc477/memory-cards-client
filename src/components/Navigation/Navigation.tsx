import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import cl from './Navigation.module.css';

enum Path {
  DECKS = 'decks',
  ADD = 'add',
  SETTINGS = 'settings',
  ABOUT = 'about',
  DONATION = 'donation',
  SOURCE_CODE = 'https://github.com/qc477/MemoryCards',
}

const Navigation: React.FC = () => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.list}>
        <li className={cl.item}>
          <NavLink to={Path.DECKS} className={({ isActive }) => (isActive ? `${cl.link} ${cl.active}` : cl.link)}>
            <span className={cl.iconWrapper}>
              <Icons className={cl.iconCircle} name='circle' />
            </span>
            Колоды
          </NavLink>
        </li>
        <li className={cl.item}>
          <NavLink to={Path.ADD} className={({ isActive }) => (isActive ? `${cl.link} ${cl.active}` : cl.link)}>
            <span className={cl.iconWrapper}>
              <Icons className={cl.iconCircle} name='circle' />
            </span>
            Создать колоду
          </NavLink>
        </li>
        <li className={cl.item}>
          <NavLink to={Path.SETTINGS} className={({ isActive }) => (isActive ? `${cl.link} ${cl.active}` : cl.link)}>
            <Icons className={cl.icon} name='settings' width='28' height='28' />
            Настройки
          </NavLink>
        </li>
        <li className={cl.item}>
          <NavLink to={Path.ABOUT} className={({ isActive }) => (isActive ? `${cl.link} ${cl.active}` : cl.link)}>
            <Icons className={cl.icon} name='info' width='28' height='28' />О приложении
          </NavLink>
        </li>
        <li className={cl.item}>
          <NavLink to={Path.DONATION} className={cl.link}>
            <Icons className={cl.icon} name='monetization' width='28' height='28' />
            Поддержать проект
          </NavLink>
        </li>
        <li className={cl.item}>
          <a href={Path.SOURCE_CODE} className={cl.link}>
            <Icons className={cl.icon} name='code' width='28' height='28' />
            Исходный код
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
