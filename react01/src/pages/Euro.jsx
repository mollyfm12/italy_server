import React from 'react';
import '../pages/css/Euro.css';
import { Link } from 'react-router-dom';

function Euro() {
  const cities = [
    { name: "Budapest, Hungary", path: "/budapest" },
    { name: "London, England" },
    { name: "South of France" },
    { name: "Monte Carlo, Monaco" },
    { name: "Split, Croatia" },
    { name: "Barcelona, Spain" },
    { name: "Palma de Mallorca, Spain" },
    { name: "Zurich, Switzerland" },
    { name: "Marrakech, Morocco" },
  ];

  return (
    <main id="places-grid">
      <section className="grid-container">
        {cities.map((city, index) => (
          <section className="grid-item" key={index}>
            {city.path ? (
              <Link to={city.path}>
                <h3>{city.name}</h3>
              </Link>
            ) : (
              <h3>{city.name}</h3>
            )}
          </section>
        ))}
      </section>
    </main>
  );
}

export default Euro;
