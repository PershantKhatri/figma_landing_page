import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import AuthModal from '../AuthModal/AuthModal';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  return (
    <>
      <nav className="furniro-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <svg width="45" height="32" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0L30 25H0L15 0Z" fill="#B8860B"/>
              <path d="M35 10L50 35H20L35 10Z" fill="#B8860B" fillOpacity="0.7"/>
            </svg>
            <span>Furniro</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>

          <div className="nav-icons">
            <button title="Account" onClick={() => setAuthType('login')}><User size={22} /></button>
            <button title="Search"><Search size={22} /></button>
            <Link to="/wishlist" title="Wishlist"><Heart size={22} /></Link>
            <Link to="/cart" title="Cart"><ShoppingCart size={22} /></Link>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {authType && <AuthModal type={authType} onClose={() => setAuthType(null)} />}
    </>
  );
}