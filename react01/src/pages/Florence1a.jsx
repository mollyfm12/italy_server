import React, { useState } from 'react';
import './css/Florence.css';

import square from '../images/florence1a/square.png';
import medici from '../images/florence1a/medici.jpg';
import wwi from '../images/florence1a/wwi.jpg';

function Florence1a() {
  const [selected, setSelected] = useState('');

  const topics = {
    option1: {
      text: 'The Discovery of Florence was a key moment in history...',
      image: square,
      alt: 'Discovery of Florence',
    },
    option2: {
      text: 'The Medici Family played an important role in the Renaissance...',
      image: medici,
      alt: 'Medici Family',
    },
    option3: {
      text: 'During World War I, Florence had a strategic position...',
      image: wwi,
      alt: 'World War I',
    },
  };

  return (
    <main id="history-page">
      <select id="menus" value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">--Select a topic--</option>
        <option value="option1">Discovery of Florence</option>
        <option value="option2">The Medici Family</option>
        <option value="option3">World War I</option>
      </select>

      <div id="paragraph-container">
        {selected && (
          <div className="topic-content">
            <p>{topics[selected].text}</p>
            <img
              className="topic-image"
              src={topics[selected].image}
              alt={topics[selected].alt}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default Florence1a;
