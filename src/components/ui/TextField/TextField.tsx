import clsx from 'clsx';
import React, { useState } from 'react';
import InputBase from '../base/InputBase';
import IconButton from '../IconButton';
import Icons from '../Icons';
import cl from './TextField.module.css';

interface TextFieldProps {
  startIcon?: React.ReactNode;
  type?: string;
  value?: string;
  placeholder?: string;
  onClear?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ startIcon, type = 'text', value, placeholder, onClear, onChange }) => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const onFocus = () => setIsFocuse(true);
  const onBlur = () => setIsFocuse(false);
  const styles = clsx(cl.textField, { [cl.focuse]: isFocuse });

  return (
    <div className={styles}>
      {typeof startIcon === 'undefined' ? null : startIcon}
      <InputBase
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div>
        {typeof onClear === 'undefined' ? null : (
          <IconButton color='faintStrongDown' onClick={onClear}>
            <Icons name='clear' />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default TextField;
