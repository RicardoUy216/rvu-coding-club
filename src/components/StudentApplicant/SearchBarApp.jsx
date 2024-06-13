import React from "react";

function SearchBarApp({sortBy, setSortBy, filterBy, setFilterBy}) {
  return (
    <div className="search-bar">
      
      <h3>Choose Applicants By Program</h3>
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
          value="testScore"
          name="sort"
          checked={sortBy === "testScore"}
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
          <option value="Java">Java</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Software Engineering">Front End Engineering</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBarApp;
