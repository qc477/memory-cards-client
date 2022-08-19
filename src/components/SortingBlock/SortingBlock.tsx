import React from 'react';
import SearchField from '../UI/SearchField';
import cl from './SortingBlock.module.css';

const SortingBlock: React.FC = () => {
  return (
    <div className={cl.sortingBlock}>
      <div className={cl.inner}>
        <SearchField />
      </div>
    </div>
  );
};

export default SortingBlock;
