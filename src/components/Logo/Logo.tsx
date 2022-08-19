import { useAppSelector } from 'hooks/redux';
import React from 'react';
import cl from './Logo.module.css';

const Logo: React.FC = () => {
  const {title} = useAppSelector(state => state.logoReducer)
  return <h1 className={cl.logo}>{title}</h1>;
};

export default Logo;
