import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ type, onClose }) {
  const [isLogin, setIsLogin] = useState(type === 'login');

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
        <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Success!'); onClose(); }}>
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign Up' : 'Login'}</span>
        </p>
      </div>
    </div>
  );
}