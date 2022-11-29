import Title from '@/components/ui/Title';
import IconButton from '@/components/ui/IconButton';
import Icons from '@/components/ui/Icons';
import React from 'react';
import cl from './Menu.module.css';

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
