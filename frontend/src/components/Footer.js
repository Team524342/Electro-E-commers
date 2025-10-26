import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} ElectroMart. All rights reserved.</p>
      </div>
    </footer>
  );
}
