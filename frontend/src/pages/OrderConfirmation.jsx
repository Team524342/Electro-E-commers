import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.order;

  if (!order) {
    return (
      <div>
        <p>No order found. Go back to the products page.</p>
        <button onClick={() => navigate("/products")}>Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <h2>✅ Order Confirmed!</h2>
      <p>Order ID: <strong>{order.id}</strong></p>
      <p>Date: {order.date}</p>
      <p>Status: {order.status}</p>
      <h3>Items:</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{order.total}</h3>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
    </div>
  );
}

export default OrderConfirmation;
