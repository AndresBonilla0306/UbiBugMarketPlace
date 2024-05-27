import React from 'react';
import '../App.css';
import logoR6 from '../assets/r6s-logo.png'

const AdminHeader = () => {
  return (
    <header className="tertiary-header">
      <img src={logoR6} alt="Logo" className="secondary-header-logo" />
      <nav className="tertiary-header-nav">
        <a href="/" className="secondary-header-link">Home</a>
        <a href="/crProduct" className="secondary-header-link">Crear Producto</a>
        <a href="/crUser" className="secondary-header-link">Crear Usuario</a>
        
      </nav>
    </header>
  );
};

export default AdminHeader;