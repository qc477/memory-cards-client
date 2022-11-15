import React from 'react';
import cl from './TextButton.module.css';

interface TextButtonProps {
  children?: string;
  onClick?: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <button className={cl.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
