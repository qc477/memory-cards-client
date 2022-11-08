import Icons from '@/components/Icons';
import React, { useState } from 'react';
import IconButton from '../IconButton';
import cl from './Input.module.css';

interface InputProps {
  startIcon?: React.ReactNode;
  placeholder?: string;
  clearButton?: boolean;
}

const Input: React.FC<InputProps> = ({ startIcon, placeholder, clearButton = false }) => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  function clearValue() {
    setValue('');
  }

  return (
    <div className={`${cl.wrapper} ${isFocuse ? cl.focuse : ''}`}>
      {startIcon}
      <input
        className={cl.input}
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
      />
      {clearButton ? (
        <IconButton color='faintStrongDown' _onClick={clearValue}>
          <Icons name='clear' />
        </IconButton>
      ) : null}
    </div>
  );
};

export default Input;
