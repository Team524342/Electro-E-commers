import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.name}</strong> – ₹{item.price}
                <Link to="/checkout">
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>
                </Link>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
