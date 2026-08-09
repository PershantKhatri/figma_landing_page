import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inspiration.css';

export default function Inspiration() {
  const navigate = useNavigate();
  return (
    <section className="inspiration-section">
      <div className="inspiration-text">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <button onClick={() => navigate('/shop')} className="explore-btn">Explore More</button>
      </div>
      <div className="inspiration-slider">
        <div className="inspire-card">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" alt="Room" />
          <div className="inspire-tag">
            <span>01 — Bed Room</span>
            <h4>Inner Peace</h4>
          </div>
        </div>
        <div className="inspire-card secondary">
          <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80" alt="Room" />
        </div>
      </div>
    </section>
  );
}