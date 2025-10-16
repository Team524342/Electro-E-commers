import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

function Products() {
    const { addToCart } = useContext(CartContext);

    const [products] = useState([
        { id: 1, name: "Smartphone", price: 29999, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Laptop", price: 59999, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Headphones", price: 1999, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Smartwatch", price: 9999, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Camera", price: 24999, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Tablet", price: 15999, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Bluetooth Speaker", price: 2999, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Gaming Console", price: 39999, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Wireless Charger", price: 1999, image: "https://via.placeholder.com/150" },
        { id: 10, name: "External Hard Drive", price: 4999, image: "https://via.placeholder.com/150" },
        { id: 11, name: "Fitness Tracker", price: 7999, image: "https://via.placeholder.com/150" },
        { id: 12, name: "E-Reader", price: 12999, image: "https://via.placeholder.com/150" },
    ]);

    return (
        <div>
            <h2>Products 🛍</h2>
            <div className="product-grid">
                {products.map((p) => (
                    <div key={p.id} className="product-card">
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>₹{p.price}</p>
                        <button onClick={() => addToCart(p)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;