import React from 'react';
import './Loader.css';

export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="loader-wrap">
      <div className="lds-dual-ring" />
      <div className="loader-text">{text}</div>
    </div>
  );
}