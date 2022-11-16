import React from 'react';
import cl from './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={cl.main}>{children}</main>;
};

export default Main;
