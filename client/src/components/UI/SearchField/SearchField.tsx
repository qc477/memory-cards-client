import React, { useState } from 'react';
import Icons from '../../Icons';
import IconButton from '../IconButton';
import cl from './SearchField.module.css';

const SearchField: React.FC = () => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <div className={`${cl.wrapper} ${isFocuse ? cl.focuse : ''}`}>
      <Icons className={cl.icon} name='search' />
      <input
        className={cl.input}
        type='text'
        placeholder='Поиск...'
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
      />
      <IconButton color='faintStrongTextDown'>
        <Icons name='filter' />
      </IconButton>
    </div>
  );
};

export default SearchField;
