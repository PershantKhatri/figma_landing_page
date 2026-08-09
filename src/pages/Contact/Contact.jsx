import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We would love to hear from you. Reach out to Furniro today!</p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-side">
          <div>
            <h2>Contact Information</h2>
            <p className="contact-subtitle">Say something to start a conversation or drop us a message!</p>
          </div>

          <div className="info-boxes-wrapper">
            <div className="info-box">
              <div className="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+92 123 456789</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>funiro@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Saddar, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-side">
          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>Your message has been successfully sent. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Us a Message</h2>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Write your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}