import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../Icons';
import cl from './Links.module.css';

interface BackLinkProps {
  isVisible?: boolean;
}

const BackLink: React.FC<BackLinkProps> = ({ isVisible = false }) => {
  return (
    <NavLink to='#' className={isVisible ? cl.link : cl.hideLink}>
      <Icons className={cl.iconLink} name='arrow-left' width='28' height='28' />
    </NavLink>
  );
};

export default BackLink;
