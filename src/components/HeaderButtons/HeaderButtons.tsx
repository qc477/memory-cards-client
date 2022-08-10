import React from 'react';
import cl from './HeaderButtons.module.css';

interface HeaderButtonsProps {
  children: React.ReactNode;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ children }) => {
  return <div className={cl.headerButtons}>{children}</div>;
};

export default HeaderButtons;
