import clsx from 'clsx';
import React from 'react';
import cl from './InputBase.module.css';

interface InputBaseProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputBase: React.FC<InputBaseProps> = (props) => {
  const styles = clsx([cl.inputBase, props.className]);
  return (
    <input
      className={styles}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};

export default InputBase;
