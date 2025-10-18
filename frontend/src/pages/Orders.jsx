import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Orders() {
  const { orders } = useContext(CartContext);

  if (!orders || orders.length === 0)
    return <h2 style={{ textAlign: "center" }}>You have no orders yet.</h2>;

  return (
    <div className="orders-container">
      <h2>📦 My Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <p>
            <strong>Order #{order.id}</strong> — {order.status}
          </p>
          <p>Date: {order.date}</p>
          <p>Items: {order.items.map((i) => i.name).join(", ")}</p>
          <p>Total: ₹{order.total}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
