import { useAppSelector } from 'hooks/redux';
import React from 'react';
import cl from './AppTitle.module.css';

const AppTitle: React.FC = () => {
  const {title} = useAppSelector(state => state.appTitleReducer)
  return <h1 className={cl.appTitle}>{title}</h1>;
};

export default AppTitle;
