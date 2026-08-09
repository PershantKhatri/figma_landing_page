import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../data/products';
import './Shop.css';

export default function Shop() {
  const navigate = useNavigate();

  return (
    <div className="shop-page">
      <div className="page-header">
        <h1>Shop Our Collection</h1>
        <p>Home &gt; Shop</p>
      </div>
      <div className="shop-container">
        <div className="products-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card" onClick={() => navigate(`/shop/${product.id}`)}>
              <div className="product-image-box">
                <img src={product.image} alt={product.name} />
                {product.discount && <span className={`badge ${product.discount.includes('-') ? 'sale' : 'new'}`}>{product.discount}</span>}
              </div>
              <div className="product-info">
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
      </div>
    </div>
  );
}