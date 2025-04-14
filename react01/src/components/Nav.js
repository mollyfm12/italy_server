import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    console.log("Menu is now:", !menuOpen);
  };

  return (
    <nav id="header-nav">
      <button id="nav-toggle" onClick={toggleMenu}>☰</button>
      <ul id="nav-items" className={menuOpen ? "show" : "hide-small"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Florence">Florence</Link></li>
        <li><Link to="/Italy">Around Italy</Link></li>
        <li><Link to="/Euro">Around Europe & Africa</Link></li>
        <li><Link to="/FAQ">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
