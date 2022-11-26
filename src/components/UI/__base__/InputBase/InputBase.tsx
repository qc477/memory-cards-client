import React from 'react';
import cl from './InputBase.module.css';

type InputBaseProps = JSX.IntrinsicElements['input'];

const InputBase: React.FC<InputBaseProps> = (props) => {
  return <input className={cl.inputBase} {...props} />;
};

export default InputBase;
