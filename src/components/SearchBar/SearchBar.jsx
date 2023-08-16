import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [userList, setUserList] = useState([]);
    const [userSearch, setUserSearch] = useState('');
  
    const handleUserList = () => {
      setUserList(list => [...list, userSearch]);
      setUserSearch('');
    }
  
    const handleInputChange = (e) => {
      setUserSearch(e.target.value);
    }
    return (
        <>
            <input 
            type="text"
            value={userSearch}
            onChange={handleInputChange}
            />
            <button onClick={handleUserList}>Buscar</button>
        </>
    )
}

export default SearchBar;