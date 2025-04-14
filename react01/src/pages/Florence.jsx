
import React from 'react';
import '../pages/css/Florence.css';
import NodeTile from '../components/NodeTile';

import ponte from '../images/florence/ponte.png';
import culture from '../images/florence/culture.png';
import food from '../images/florence/food.png';
import david from '../images/florence/david.png';
import leather from '../images/florence/leather.png';
import plaza from '../images/florence/plaza.png';

function Florence() {
  return (
    <main id="florence-page">
      <section className="gallery">
        <NodeTile title="History" image={ponte} link="/florence-1a" />
        <NodeTile title="Culture" image={culture} />
        <NodeTile title="Food" image={food} />
        <NodeTile title="Art" image={david} />
        <NodeTile title="Activities" image={leather} />
        <NodeTile title="Traditions" image={plaza} />
      </section>
    </main>
  );
}

export default Florence;
