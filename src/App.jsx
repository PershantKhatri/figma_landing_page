import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import './App.css';

export default function App() {
  return (
    <Router basename="/figma_landing_page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}