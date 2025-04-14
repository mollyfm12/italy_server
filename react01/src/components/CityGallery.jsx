import React from 'react';
import './css/CityGallery.css';

function CityGallery({ city, data }) {
  if (!city || !data) return null;

  const { text, images } = data;

  return (
    <section className="city-gallery">
      <p className="city-description">{text}</p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`${city} ${index}`} />
        ))}
      </div>
    </section>
  );
}

export default CityGallery;
