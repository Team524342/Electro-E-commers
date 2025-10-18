import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


  const handlePayment = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await fetch("http://127.0.0.1:8000/api/create-order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }), // ₹ 500
    });

    const data = await result.json();
    if (!data.order_id) return alert("Something went wrong");

    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      name: "Electro E-Commerce",
      description: "Payment for Order",
      order_id: data.order_id,
      handler: async function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // TODO: verify payment via backend here
      },
      prefill: {
        name: "Your Name",
        email: "you@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


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

          <button  onClick={handlePayment}>Place Order</button> {/*  type="submit" */}
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
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

export default Checkout;