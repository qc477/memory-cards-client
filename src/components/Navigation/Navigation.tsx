import React from 'react';
import { AddButton } from '../UI/Buttons';
import { AboutLink, SettingsLink } from '../UI/Links';
import cl from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigationList}>
        <li className={cl.navigationItem}>
          <AddButton />
        </li>
        <li className={cl.navigationItem}>
          <AboutLink />
        </li>
        <li className={cl.navigationItem}>
          <SettingsLink />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
