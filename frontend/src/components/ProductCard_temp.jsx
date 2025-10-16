import React from 'react';
import { useCart } from '../context/cartContext';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAdd }) {
  const { dispatch } = useCart();

  function handleAdd() {
    if (onAdd) {
      onAdd(product);
    } else {
      dispatch({ type: 'ADD_ITEM', payload: { product, quantity: 1 } });
    }
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="pc-image-wrap">
        <img src={product.image} alt={product.name} className="pc-image" />
      </Link>

      <div className="pc-body">
        <h3 className="pc-title">{product.name}</h3>
        {product.brand && <div className="pc-brand">{product.brand}</div>}
        <div className="pc-price">₹{Number(product.price).toLocaleString()}</div>
      </div>

      <div className="pc-actions">
        <button className="btn-primary pc-btn" onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
