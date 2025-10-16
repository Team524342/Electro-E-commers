import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import { CartProvider } from "./CartContext";
import Checkout from "./pages/checkout";
import "./App.css";

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <nav className="navbar">
          <h1>ElectroMart ⚡</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;