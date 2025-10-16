import React from 'react';
import './FilterSidebar.css';

export default function FilterSidebar({
  brands = [],
  selectedBrand = '',
  onBrandChange = ()=>{},
  maxPrice = 200000,
  onPriceChange = ()=>{}
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-box">
        <h4>Filter by Brand</h4>
        <select className="filter-select" value={selectedBrand} onChange={e => onBrandChange(e.target.value)}>
          <option value="">All</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div className="filter-box">
        <h4>Max Price</h4>
        <input
          type="range"
          min="0"
          max="200000"
          value={maxPrice}
          onChange={e => onPriceChange(Number(e.target.value))}
          className="filter-range"
        />
        <div className="filter-price">Up to ₹{Number(maxPrice).toLocaleString()}</div>
      </div>
    </aside>
  );
}