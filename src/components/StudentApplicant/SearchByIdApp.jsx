import React from 'react'

function SearchByIdApp( {searchTerm, setSearchTerm, onSearchApplicant}) {
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleClick = () => {
        onSearchApplicant();
      };
    
      return (
        <div className='search-by-id'>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <h4>Enter the ID number</h4>
          <button onClick={handleClick}>Search</button>
        </div>
      );
    };
   

export default SearchByIdApp