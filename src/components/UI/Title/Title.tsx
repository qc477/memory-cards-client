import clsx from 'clsx';
import React from 'react';
import cl from './Title.module.css';

type Size = 'h1' | 'h2' | 'h3';

interface TitleProps {
  children: string;
  className?: string;
  size?: Size;
}

const Title: React.FC<TitleProps> = ({ children, className = '', size = 'h1' }) => {
  const styles = clsx([cl.title, className], {
    [cl.sizeH1]: size === 'h1',
    [cl.sizeH2]: size === 'h2',
    [cl.sizeH3]: size === 'h3',
  });

  return <h1 className={styles}>{children}</h1>;
};

export default Title;
