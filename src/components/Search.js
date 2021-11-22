import React from 'react';

function Search({ searchFilter, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchFilter}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={e => {
          onSearchChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
