import React from 'react';
import cl from './Menu.module.css';
import Title from '../UI/Title';
import IconButton from '../UI/IconButton';
import Icons from '../Icons';

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <div className={cl.header}>
      <Title className={cl.title}>MemoryCards</Title>
      <IconButton color='faintStrongDown' onClick={onClose}>
        <Icons name='close' />
      </IconButton>
    </div>
  )
}

export default Header;
