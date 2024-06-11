// SearchBar.js
import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Employees" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;