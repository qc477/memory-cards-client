import React from 'react';
import cl from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigationList}>
        <li className={cl.navigationItem}></li>
        <li className={cl.navigationItem}></li>
        <li className={cl.navigationItem}></li>
      </ul>
    </nav>
  );
};

export default Navigation;
