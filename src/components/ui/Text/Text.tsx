import clsx from 'clsx';
import React from 'react';
import cl from './Text.module.css';

interface TextProps {
  children: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  const styles = clsx([cl.text, className]);

  return <p className={styles}>{children}</p>;
};

export default Text;
