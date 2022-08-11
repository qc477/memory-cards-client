import React from 'react';
import { AddButton, InfoButton, SettingsButton } from '../UI/Buttons';
import cl from './HeaderButtons.module.css';

const HeaderButtons: React.FC = () => {
  return (
    <div className={cl.headerButtons}>
      <AddButton />
      <InfoButton />
      <SettingsButton />
    </div>
  );
};

export default HeaderButtons;
