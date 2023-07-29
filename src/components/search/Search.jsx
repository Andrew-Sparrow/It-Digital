import React, { useState } from 'react';
import styles from './search.module.css';


const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <input className={styles.search} type="text" name="search" value={searchValue} onChange={handleChangeSearchValue} />
  )
};

export { Search };