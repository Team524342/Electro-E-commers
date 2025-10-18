import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OrderConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderId = state?.orderId;

  return (
    <div className="confirm-container">
      <h2>✅ Order Confirmed!</h2>
      <p>Thank you for shopping with ElectroMart!</p>
      {orderId && <p>Your order number: <strong>{orderId}</strong></p>}
      <button onClick={() => navigate("/orders")}>Track My Orders</button>
    </div>
  );
}

export default OrderConfirmation;
