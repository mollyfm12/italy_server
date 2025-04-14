import React from 'react';
import '../components/css/NodeTile.css';
import { Link } from 'react-router-dom';

function NodeTile({ title, image, link }) {
  return (
    <section className="node">
      <div className="link">
        {link ? <Link to={link}>{title}</Link> : <span>{title}</span>}
      </div>
      <img src={image} alt={title} />
    </section>
  );
}

export default NodeTile;
