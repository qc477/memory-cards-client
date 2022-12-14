import clsx from 'clsx';
import React, { useState } from 'react';
import InputBase from '../base/InputBase';
import IconButton from '../IconButton';
import Icons from '../Icons';
import cl from './TextField.module.css';

interface TextFieldProps {
  startIcon?: React.ReactElement;
  type?: string;
  value?: string;
  placeholder?: string;
  onClear?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ startIcon, type = 'text', value, placeholder, onClear, onChange }) => {
  const [isFocus, setFocus] = useState<boolean>(false);
  const onFocus = () => setFocus((isFocus) => !isFocus);
  const onBlur = () => setFocus((isFocus) => !isFocus);
  const styles = clsx(cl.textField, { [cl.inFocus]: isFocus });

  return (
    <div className={styles}>
      {typeof startIcon === 'undefined' ? null : React.cloneElement(startIcon, { className: cl.startIcon })}
      <InputBase
        className={cl.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {typeof onClear === 'undefined' ? null : (
        <IconButton className={cl.clearButton} color='faintStrongDown' onClick={onClear}>
          <Icons name='close-small-medium' />
        </IconButton>
      )}
    </div>
  );
};

export default TextField;
