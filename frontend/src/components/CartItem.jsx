import React from "react";
import "./CartItem.css";

function CartItem({ item, removeFromCart }) {
  return (
    <li className="cart-item">
      <span>{item.name} – ₹{item.price}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
