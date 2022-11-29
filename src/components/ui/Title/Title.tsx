import clsx from 'clsx';
import React from 'react';
import cl from './Title.module.css';

type Type = 'h1' | 'h2' | 'h3';

interface TitleProps {
  children: string;
  className?: string;
  type?: Type;
}

const Title: React.FC<TitleProps> = ({ children, className = '', type = 'h1' }) => {
  const styles = clsx([cl.title, className], {
    [cl.sizeH1]: type === 'h1',
    [cl.sizeH2]: type === 'h2',
    [cl.sizeH3]: type === 'h3',
  });

  return React.createElement(type, { className: styles }, children);
};

export default Title;
