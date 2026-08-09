import React from 'react';
import './FurnitureGallery.css';

export default function FurnitureGallery() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NASlrmL5xjTbkYf0xLafNh_f_WmtLK7oQ8sel_S3yuoOvMuFSWDFCNjH&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7aSqDjXSQ_pnixwnEs6NUxxpIZPPmghyYFpuqozYXQzQHvtWCCGDyUk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aMwfHmX-pHTsKvvcxCsWCft--CMZ7U2dL9VWEahH0b8P40ilNLYVsi8D&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim1S1c6oG1bjnn9kvNYi4YIQrm_vsncdJfEvBpVpa_an5rjKWn7Gabuo&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLLCRodb90PGm8_SY2Df-VhwD7fJ0_ptSfa6dObkF-VRJOEoRDr7kDxsC&s=10"
  ];

  return (
    <section className="gallery-section">
      <p>Share your setup with</p>
      <h2>#FuniroFurniture</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt="Furniture setup" />
          </div>
        ))}
      </div>
    </section>
  );
}