import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

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
                            <li key={item.id}
                            style={{ marginBottom: "10px" }}>
                                <strong>{item.name}</strong> - ₹{item.price}
                                <button onClick={() => removeFromCart(item.id)}
                                style={{ marginLeft: "10px",backgroundColor: "#ff4d4d", 
                                color: "white", 
                                border: "none",
                                borderRadius: "5px", 
                                cursor: "pointer", 
                                padding: "5px 8px" }}>
                                    Remove
                                </button>
                            </li>
                            ))}
                    </ul>
                    <h3>Total: ₹{total}</h3>
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
                </div>
            )}
        </div>
    );
}
export default Cart;