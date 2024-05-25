import React from 'react';
import '../App.css'
import logo from '../assets/Ubisoft-logo.jpg'

const Header = () => {  
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
    </header>
  );
};

export default Header;
