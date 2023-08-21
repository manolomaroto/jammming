import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({handleSearchTerm}) => {
    const [userSearch, setUserSearch] = useState('');
  
    const handleInputChange = (e) => {
        setUserSearch(e.target.value);
      }

    const sendSearchTerm = () => {
        handleSearchTerm(userSearch);
    }
  
    return (
        <>
            <input 
            type="text"
            value={userSearch}
            onChange={handleInputChange}
            />
            <a className="waves-effect waves-light btn" onClick={sendSearchTerm}>Buscar</a>
        </>
    )
}

export default SearchBar;