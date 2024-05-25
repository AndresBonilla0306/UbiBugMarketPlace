// src/components/SecondaryHeader.js
import React from 'react';
import '../App.css'; 
import logoR6 from '../assets/r6s-logo.png'

const SecondaryHeader = () => {
  return (
    <header className="secondary-header">
      <img src={logoR6} alt="Logo" className="secondary-header-logo" />
      <nav className="secondary-header-nav">
        <a href="#marketplace" className="secondary-header-link">MarketPlace</a>
        <a href="#perfil" className="secondary-header-link">Perfil</a>
      </nav>
    </header>
  );
};

export default SecondaryHeader;
