import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const AboutButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={cl.button} onClick={() => navigate('/about')} title='О приложении'>
      <Icons className={cl.icon} name='info' />
    </button>
  );
};

export default AboutButton;
