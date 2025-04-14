import React from 'react';
import './css/Header.css';
import logo from '../images/logo.png';


function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>A Study Abroad Scrapbook</h1>
    </header>
  );
}

export default Header;
