import React from "react";

function SearchBar({sortBy, setSortBy, filterBy, setFilterBy}) {
  return (
    <div className="search-bar">
      
      <h3>Choose Students By Program</h3>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={e => setSortBy(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="currentGrade"
          name="sort"
          checked={sortBy === "currentGrade"}
          onChange={e => setSortBy(e.target.value)}
        />
        Program
      </label>
      <br />
      <label>
        <strong>Click to choose category:</strong>
        <select onChange={e => setFilterBy(e.target.value)} value={filterBy}>
        <option value="">Choose Program</option>
        <option value="All">All</option>
          <option value="Java">Java(Computer Science Basics)</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Information Cybersecurity Analytics">Information Cybersecurity Analytics</option>
        </select>
      </label>
    </div> 
  );
}

export default SearchBar;
