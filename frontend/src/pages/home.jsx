import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../components/Home.css";

function Home() {
  // Add this to your Home.js or component file
useEffect(() => {
    const hero = document.querySelector('.hero');
    
    hero.addEventListener('mousemove', (e) => {
        const circle = hero.querySelector('::before');
        const x = e.clientX - hero.getBoundingClientRect().left;
        const y = e.clientY - hero.getBoundingClientRect().top;
        
        hero.style.setProperty('--x', x + 'px');
        hero.style.setProperty('--y', y + 'px');
    });
}, []);
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to ElectroMart <span class="bolt">⚡</span></h1>

        <p>Your one-stop destination for all the latest and greatest electronics!</p>
        <Link to="/products">
          <button className="shop-btn">🛍️ Start Shopping</button>
        </Link>
      </section>

      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>⚡ Fast Delivery</h3>
            <p>Get your favorite gadgets delivered right to your doorstep, lightning fast.</p>
          </div>
          <div className="feature-item">
            <h3>💰 Best Prices</h3>
            <p>Enjoy competitive pricing and regular discounts on top brands.</p>
          </div>
          <div className="feature-item">
            <h3>⭐ Trusted Quality</h3>
            <p>Every product is verified and quality-checked before shipping.</p>
          </div>
          <div className="feature-item">
            <h3>📞 24/7 Support</h3>
            <p>Our friendly support team is always ready to help you with your queries.</p>
          </div>
        </div>
      </section>
     <footer className="footer">
        <p>© 2025 ElectroMart | Designed & developed by Team B-F-G</p>
      </footer>
    </div>
  );
}

export default Home;
