import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Links.module.css';

const AboutLink: React.FC = () => {
  return (
    <NavLink to='about' className={cl.link}>
      <Icons className={cl.iconLink} name='info' width='28' height='28' />
    </NavLink>
  );
};

export default AboutLink;
