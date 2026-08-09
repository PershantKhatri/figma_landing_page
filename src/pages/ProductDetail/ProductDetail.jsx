import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id) || productsData[0];

  const [size, setSize] = useState('L');
  const [color, setColor] = useState('#816dff');
  const [qty, setQty] = useState(1);

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <span>{product.name}</span>
      </div>

      <div className="detail-container">
        <div className="detail-images">
          <div className="thumbnail-list">
            {[1, 2, 3, 4].map((_, idx) => (
              <img key={idx} src={product.image} alt="Thumb" />
            ))}
          </div>
          <div className="main-preview">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <h2 className="detail-price">{product.price}</h2>
          <div className="rating">
            {"★".repeat(5)} <span className="reviews-count">5 Customer Review</span>
          </div>
          <p className="detail-desc">{product.description}</p>

          <div className="size-selector">
            <label>Size</label>
            <div className="sizes">
              {['L', 'XL', 'XS'].map((s) => (
                <button key={s} className={size === s ? 'active' : ''} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>

          <div className="color-selector">
            <label>Color</label>
            <div className="colors">
              {['#816dff', '#000000', '#b8860b'].map((c) => (
                <span key={c} style={{ background: c }} className={color === c ? 'active' : ''} onClick={() => setColor(c)}></span>
              ))}
            </div>
          </div>

          <div className="action-row">
            <div className="qty-counter">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="add-cart-btn" onClick={() => alert('Added to cart!')}>Add To Cart</button>
            <button className="compare-btn">+ Compare</button>
          </div>
        </div>
      </div>
    </div>
  );
}