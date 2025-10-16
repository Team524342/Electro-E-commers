import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";

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
                        <ul>
  {cart.map((item) => (
    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
  ))}
</ul>

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