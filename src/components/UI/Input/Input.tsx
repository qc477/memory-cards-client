import Icons from '@/components/Icons';
import React, { useState } from 'react';
import IconButton from '../IconButton';
import cl from './Input.module.css';

interface InputProps {
  startIcon?: React.ReactNode;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ startIcon, value, placeholder, onChange, type = 'text' }) => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);

  function clearValue() {}

  return (
    <div className={`${cl.wrapper} ${isFocuse ? cl.focuse : ''}`}>
      {startIcon}
      <input
        className={cl.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
      />
      <IconButton color='faintStrongDown' onClick={clearValue}>
        <Icons name='clear' />
      </IconButton>
    </div>
  );
};

export default Input;
