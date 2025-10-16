import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address) {
      alert("Please fill in all the details.");
      return;
    }

    setOrderPlaced(true);
  };

  if (cart.length === 0) {
    return <p>Your cart is empty. Add items before checkout!</p>;
  }

  return (
    <div>
      <h2>Checkout 💳</h2>

      {!orderPlaced ? (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} – ₹{item.price}
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>

          <h3>Customer Details</h3>
          <label>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </label>

          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI / Online Payment</option>
            </select>
          </label>

          <button type="submit">Place Order</button>
        </form>
      ) : (
        <div className="order-success">
          <h3>✅ Order Placed Successfully!</h3>
          <p>Thank you, {name}. Your order will be delivered soon to:</p>
          <p><strong>{address}</strong></p>
          <p>Payment Method: {paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;