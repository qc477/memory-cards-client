import React from 'react';
import { AddButton, AboutButton, SettingsButton } from '../UI/Buttons';
import cl from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigationList}>
        <li className={cl.navigationItem}>
          <AddButton />
        </li>
        <li className={cl.navigationItem}>
          <AboutButton />
        </li>
        <li className={cl.navigationItem}>
          <SettingsButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
