import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

const AboutButton: React.FC = () => {
  const navigate = useNavigate()

  return (
    <button className={cl.button} onClick={() => navigate('/about')}>
      <Icons className={cl.icon} name='info' width='28' height='28' />
    </button>
  );
};

export default AboutButton;
