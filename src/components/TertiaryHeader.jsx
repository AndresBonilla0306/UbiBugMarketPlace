import React from 'react';
import '../App.css';
import logoR6 from '../assets/r6s-logo.png'

const TertiaryHeader = () => {
  return (
    <header className="tertiary-header">
      <img src={logoR6} alt="Logo" className="secondary-header-logo" />
      <nav className="tertiary-header-nav">
        <a href="/" className="secondary-header-link">Home</a>
        <a href="/login" className="secondary-header-link">Iniciar sesión</a>
        <a href="/register" className="secondary-header-link">Registrarse</a>
      </nav>
    </header>
  );
};

export default TertiaryHeader;