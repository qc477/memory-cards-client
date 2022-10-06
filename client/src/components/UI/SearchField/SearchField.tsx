import React, { useState } from 'react';
import Icons from '../../Icons';
import cl from './SearchField.module.css';

const SearchField: React.FC = () => {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <div className={`${cl.searchField} ${isFocuse ? cl.searchFieldFocuse : ''}`}>
      <Icons className={cl.searchFieldIcon} name='search' />
      <input
        className={cl.searchFieldInput}
        type='text'
        placeholder='Поиск...'
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocuse(true)}
        onBlur={() => setIsFocuse(false)}
      />
    </div>
  );
};

export default SearchField;
