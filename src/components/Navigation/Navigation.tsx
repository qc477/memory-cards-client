import React from 'react';
import { AddButton, InfoButton, SettingsButton } from '../UI/Buttons';
import cl from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <div className={cl.headerButtons}>
      <AddButton />
      <InfoButton />
      <SettingsButton />
    </div>
  );
};

export default Navigation;
