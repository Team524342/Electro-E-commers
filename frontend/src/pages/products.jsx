import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import ProductCard from '../components/productCard';
import SearchBar from '../components/searchBar';
import FilterSidebar from '../components/filterSidebar';
import Loader from '../components/Loader';

function Products() {
    const { addToCart } = useContext(CartContext);

    // small wrapper so pages can call a dispatch-like API expected by some components
    function dispatch(action) {
        if (!action || action.type !== 'ADD_ITEM') return;
        const payload = action.payload;
        if (!payload) return;
        // payload may contain product and quantity
        const product = payload.product || payload;
        // prefer context API
        addToCart(product);
    }

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // simulate fetching products (replace with real fetch later)
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setProducts([
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
            setLoading(false);
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    const [query, setQuery] = useState('');
    const [brand, setBrand] = useState('');
    const [maxPrice, setMaxPrice] = useState(200000);

    const brands = Array.from(new Set(products.map(p => p.brand).filter(Boolean)));

    const filtered = products.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
        const matchesBrand = brand ? p.brand === brand : true;
        const matchesPrice = p.price <= maxPrice;
        return matchesQuery && matchesBrand && matchesPrice;
    });

    if (loading) return <Loader />;

    return (
        <div>
            <h2>Products 🛍</h2>
            <div className="products-layout">
                <FilterSidebar
                    brands={brands}
                    selectedBrand={brand}
                    onBrandChange={setBrand}
                    maxPrice={maxPrice}
                    onPriceChange={setMaxPrice}
                />
                <div>
                    <SearchBar value={query} onChange={setQuery} />
                    <div className="product-grid">
                {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} addToCart={(prod) => dispatch({ type: 'ADD_ITEM', payload: { product: prod, quantity: 1 } })} />
                ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;