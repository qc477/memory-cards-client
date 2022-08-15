import React from 'react';
import cl from './AppContainer.module.css';

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <div className={cl.appContainer}>{children}</div>;
};

export default AppContainer;
