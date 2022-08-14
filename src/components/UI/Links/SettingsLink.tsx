import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Links.module.css';

const SettingsLink: React.FC = () => {
  return (
    <Link to='settings' className={cl.link}>
      <Icons className={cl.iconLink} name='settings' width='28' height='28' />
    </Link>
  );
};

export default SettingsLink;
