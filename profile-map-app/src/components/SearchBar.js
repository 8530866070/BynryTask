// src/components/SearchBar.js
import React from "react";
import "../components/styles.css";

function SearchBar({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
