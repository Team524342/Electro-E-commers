import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import { CartProvider } from "./context/cartContext";
import Checkout from "./pages/checkout";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <CartProvider>
  <Router>
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    <Footer />
  </Router>
</CartProvider>

  );
}

export default App;