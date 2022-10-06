import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const SettingsButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={cl.button} onClick={() => navigate('/settings')} title='Настройки'>
      <Icons className={cl.icon} name='settings' />
    </button>
  );
};

export default SettingsButton;
