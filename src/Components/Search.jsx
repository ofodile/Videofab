// SearchBar.js
import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import "../Css/SearchBar.css"

const SearchBar = () => {
  
  const [inputValue, setInputValue] = useState("")
    const history = useHistory();

const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearchClick = () => {
       if (inputValue.trim() !== '') {
        // Perform the function if input is not empty
         console.log("Search button clicked");
         history.push('./SearchResult.jsx');
       } else {
        alert('Search cannot be empty!');
    }
  };
   
  return (
    <div className="search-container">
       <input type="text"
       placeholder="Search..."
       value={inputValue}
       onChange={handleChange}
        />
        <button onClick={handleSearchClick} className="search-button">
        <FaSearch className="search-icon" size={20} />
      </button>
    </div>
  )
};  
export default SearchBar;
 