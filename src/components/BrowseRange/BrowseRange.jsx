import React from 'react';
import './BrowseRange.css';

export default function BrowseRange() {
  const categories = [
    {
      title: 'Dining',
      image: 'https://cdn.mos.cms.futurecdn.net/jWPwGryqMpmGWS2eGJXfXT.jpg'
    },
    {
      title: 'Living',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4WUW1vrucFfj48UIRgtI-g273zJvJZg_T-lpmTQaKtCErzxRRS2WvDI&s=10'
    },
    {
      title: 'Bedroom',
      image: 'https://arysahulatbazar.pk/wp-content/uploads/2024/01/Amb-4.jpg'
    }
  ];

  return (
    <section className="browse-range-section">
      <div className="browse-container">
        <div className="browse-header">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="browse-grid">
          {categories.map((item, index) => (
            <div className="browse-card" key={index}>
              <div className="browse-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}