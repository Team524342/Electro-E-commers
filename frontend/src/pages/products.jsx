import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const allProducts = [
  { id: 1, name: "Laptop", category: "Computers", price: 50000, image: "/images/laptop.jpg" },
  { id: 2, name: "Smartphone", category: "Mobiles", price: 20000, image: "/images/phone.jpg" },
  { id: 3, name: "Headphones", category: "Accessories", price: 1500, image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", category: "Wearables", price: 3000, image: "/images/watch.jpg" },
  { id: 5, name: "Tablet", category: "Computers", price: 25000, image: "/images/tablet.jpg" },
  { id: 6, name: "Bluetooth Speaker", category: "Accessories", price: 3500, image: "/images/speaker.jpg" },
  { id: 7, name: "Gaming Console", category: "Entertainment", price: 40000, image: "/images/console.jpg" },
  { id: 8, name: "E-reader", category: "Entertainment", price: 8000, image: "/images/ereader.jpg" },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = allProducts.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <div className="products-page">
      <h2>🛍️ Browse Products</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Computers">Computers</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
        </select>
      </div>

      <div className="product-list">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
