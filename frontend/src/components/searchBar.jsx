import React from 'react';
import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}