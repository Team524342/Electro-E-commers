import React from "react";
import ProductCard from "./ProductCard";

const products = [
	{ id: 1, name: "Laptop", price: 50000, image: "/images/laptop.jpg" },
	{ id: 2, name: "Smartphone", price: 20000, image: "/images/phone.jpg" },
	{ id: 3, name: "Headphones", price: 1500, image: "/images/headphones.jpg" },
	{ id: 4, name: "Smartwatch", price: 3000, image: "/images/watch.jpg" },
];

function ProductList() {
	return (
		<div className="product-list">
			{products.map((p) => (
				<ProductCard key={p.id} product={p} />
			))}
		</div>
	);
}

export default ProductList;
