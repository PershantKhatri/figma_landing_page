import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="furniro-footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h3>Funiro.</h3>
          <p>Saddar Impress Market Karachi Pakistan</p>
        </div>
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><Link to="/contact">Payment Options</Link></li>
            <li><Link to="/contact">Returns</Link></li>
            <li><Link to="/contact">Privacy Policies</Link></li>
          </ul>
        </div>
        <div className="footer-col newsletter-col">
          <h4>Newsletter</h4>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <input type="email" placeholder="Enter Your Email Address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2026 furino. All rights reserved</p>
      </div>
    </footer>
  );
}