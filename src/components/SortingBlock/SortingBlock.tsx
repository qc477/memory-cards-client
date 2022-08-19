import React from 'react';
import SearchField from '../UI/SearchField';
import cl from './SortingBlock.module.css';

const SortingBlock: React.FC = () => {
  return (
    <div className={cl.sortingBlock}>
      <SearchField />
    </div>
  );
};

export default SortingBlock;