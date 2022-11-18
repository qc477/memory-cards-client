import Icons from '@/components/Icons';
import React, { useState } from 'react';
import IconButton from '../IconButton';
import cl from './Input.module.css';

interface InputProps {
  startIcon?: React.ReactNode;
  value?: string;
  type?: string;
  placeholder?: string;
  setStateParent?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ startIcon, placeholder, setStateParent, type = 'text' }) => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  function setStates(targetValue: string) {
    setValue(targetValue);
    setStateParent && setStateParent(targetValue);
  }

  function clearValue() {
    setValue('');
    setStateParent && setStateParent('');
  }

  return (
    <div className={`${cl.wrapper} ${isFocuse ? cl.focuse : ''}`}>
      {startIcon}
      <input
        className={cl.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setStates(event.target.value)}
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
