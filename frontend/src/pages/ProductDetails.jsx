import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000, image: "/images/laptop.jpg", description: "High performance laptop for work and gaming." },
  { id: 2, name: "Smartphone", price: 20000, image: "/images/phone.jpg", description: "Powerful smartphone with great camera." },
  { id: 3, name: "Headphones", price: 1500, image: "/images/headphones.jpg", description: "Wireless headphones with noise cancellation." },
  { id: 4, name: "Smartwatch", price: 3000, image: "/images/watch.jpg", description: "Track your health and fitness easily." },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.name} className="details-image" />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default ProductDetails;
