import React from 'react';
import './About.css';

export default function About() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Ali",
      city: "Karachi",
      comment: "The quality of the Syltherine chair is exceptionally good, it completely transformed the look of my living room. Highly recommended!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Fatima Noor",
      city: "Lahore",
      comment: "I purchased the Asgaard sofa, the comfort level is 10/10 and the delivery was received right on time. Thank you Furniro!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Zainab Malik",
      city: "Islamabad",
      comment: "The Muggo and decor items are so cute and the packaging was secure enough that nothing was damaged. Amazing service!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 4,
      name: "Usman Tariq",
      city: "Faisalabad",
      comment: "Prices are very reasonable and the finish of the product feels completely premium, just like imported furniture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 5,
      name: "Ayesha Khan",
      city: "Rawalpindi",
      comment: "The customer support team was very cooperative. I needed a custom color option and they delivered it precisely as requested.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 6,
      name: "Bilal Ahmed",
      city: "Multan",
      comment: "Ordering furniture online can be risky, but Furniro exceeded all expectations with their superior wood finish and prompt shipping.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="about-hero">
        <h1>About Furniro</h1>
        <p>Crafting Elegance, Comfort, and Trust Since Years</p>
      </div>

      {/* Owner & Experience Section */}
      <section className="owner-section">
        <div className="owner-card">
          <div className="owner-img-box">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL260s6HopKSv0sXhL-aa0cTymh-i4r8En4do_hgDmvA&s" 
              alt="Founder & CEO" 
            />
          </div>
          <div className="owner-info">
            <h2>Meet Our Founder</h2>
            <h3 className="owner-title">Pershant Khatri Lead Designer & CEO</h3>
            <p className="owner-desc">
              With over <strong>8+ years of professional experience</strong> in modern interior architecture and bespoke furniture manufacturing, our journey began with a simple vision: to transform houses into warm, stylish homes across Pakistan. Every piece at Furniro reflects meticulous craftsmanship, durability, and contemporary aesthetic standards.
            </p>
            <div className="experience-badges">
              <span>8+ Years Experience</span>
              <span>5000+ Happy Clients</span>
              <span>Premium Craftsmanship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="quality-section">
        <h2>Our Quality Promise</h2>
        <div className="quality-grid">
          <div className="quality-box">
            <h3>Premium Materials</h3>
            <p>We source only high-grade seasoned wood, imported fabrics, and durable rust-free metals to ensure longevity.</p>
          </div>
          <div className="quality-box">
            <h3>Strict Quality Control</h3>
            <p>Every product undergoes a rigorous 3-step inspection process before it is carefully packed and dispatched.</p>
          </div>
          <div className="quality-box">
            <h3>Safe Nationwide Delivery</h3>
            <p>We guarantee secure doorstep delivery across all major cities in Pakistan with expert installation support.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <p className="subtitle">Real feedback from our valued customers across Pakistan</p>
        
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="client-header">
                <img src={review.image} alt={review.name} />
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.city}, Pakistan</span>
                </div>
              </div>
              <div className="rating-stars">{review.rating}</div>
              <p className="comment-text">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}