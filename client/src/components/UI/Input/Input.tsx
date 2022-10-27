import React, { useState } from 'react';
import cl from './Input.module.css';

interface InputProps {
  startIcon?: React.ReactNode;
  placeholder?: string;
  isClearButton?: boolean;
}

const Input: React.FC<InputProps> = ({ startIcon, placeholder, isClearButton = false }) => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <div className={`${cl.wrapper} ${isFocuse ? cl.focuse : ''}`}>
      {startIcon}
      <input
        className={cl.input}
        type='text'
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
      />
      {isClearButton ? 'x' : null}
    </div>
  );
};

export default Input;
