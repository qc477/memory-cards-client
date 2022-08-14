import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Buttons.module.css';

interface BackLinkProps {
  isVisible: boolean;
}

const BackButton: React.FC<BackLinkProps> = ({ isVisible }) => {
  const navigate = useNavigate()

  return (
    <button className={isVisible ? cl.button : cl.hide} onClick={() => navigate('..')}>
      <Icons className={cl.icon} name='arrow-left' width='28' height='28' />
    </button>
  );
};

export default BackButton;
