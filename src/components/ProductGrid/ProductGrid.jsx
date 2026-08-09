import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../data/products';
import './ProductGrid.css';

export default function ProductGrid() {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {productsData.slice(0, 8).map((product) => (
          <div key={product.id} className="product-card">
            
            {/* Image Box with Hover Overlay */}
            <div className="product-image-box">
              <img src={product.image} alt={product.name} />
              
              {product.discount && (
                <span className={`badge ${product.discount.includes('-') ? 'sale' : 'new'}`}>
                  {product.discount}
                </span>
              )}

              {/* Hover Overlay */}
              <div className="product-overlay">
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => navigate(`/shop/${product.id}`)}
                >
                  Add to cart
                </button>
                <div className="product-actions">
                  <span>Share</span>
                  <span>Compare</span>
                  <span>Like</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info" onClick={() => navigate(`/shop/${product.id}`)}>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <div className="price-box">
                <span className="current-price">{product.price}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </div>
            </div>

          </div>
        ))}
      </div>
      
      <div className="show-more-container">
        <button onClick={() => navigate('/shop')} className="show-more-btn">Show More</button>
      </div>
    </section>
  );
}