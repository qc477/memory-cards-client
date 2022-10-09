import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import cl from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={cl.navList}>
        <li className={cl.navItem}>
          <NavLink to={'account'} className={cl.navLink}>
            <Icons className={cl.navIcon} name='account' />
            Аккаунт
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={'settings'} className={cl.navLink}>
            <Icons className={cl.navIcon} name='settings' />
            Настройки
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={'about'} className={cl.navLink}>
            <Icons className={cl.navIcon} name='info' />О приложении
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to={'donation'} className={cl.navLink}>
            <Icons className={cl.navIcon} name='monetization' />
            Поддержать
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <a href='https://github.com/qc477/OpenMemoryCards' className={cl.navLink}>
            <Icons className={cl.navIcon} name='code' />
            Исходный код
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
