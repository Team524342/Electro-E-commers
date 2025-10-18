import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // adjust path if your context is elsewhere
import './Navbar.css';

export default function Navbar() {
  const { state } = useCart(); // uses context with structure { state, dispatch } if you used useReducer
  const itemCount = state?.items?.reduce((sum, i) => sum + (i.quantity ?? i.qty ?? 1), 0) || 0;

  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">ElectroMart</Link>

        <nav className="nav-links">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart <span className="cart-count">({itemCount})</span></Link>
        </nav>
      </div>
    </header>
  );
}
