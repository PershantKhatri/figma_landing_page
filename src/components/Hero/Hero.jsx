import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-card">
          <span className="hero-subtitle">New Arrival</span>
          <h1>Discover Our<br />New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
          <button onClick={() => navigate('/shop')} className="hero-btn">BUY NOW</button>
        </div>
      </div>
    </section>
  );
}