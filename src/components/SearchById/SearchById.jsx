import React from 'react'

function SearchById( {searchTerm, setSearchTerm, onSearchStudent}) {
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleClick = () => {
        onSearchStudent();
      };
    
      return (
        <div className='search-by-id'>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <h4>Enter the ID number</h4>
          <button onClick={handleClick}>Search</button>
        </div>
      );
    };
   

export default SearchById