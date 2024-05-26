// src/components/SecondaryHeader.js
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import '../App.css'; 
import logoR6 from '../assets/r6s-logo.png'
import { UserContext } from '../context/UserContext';


const SecondaryHeader = () => {

  const { user, logout, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  

  const addMoney = (amount) => {
    setUser(prevUser => ({
      ...prevUser,
      money: prevUser.money + amount
    }));
  };

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  return (
    <header className="secondary-header">
      <div className="left-navs">
        <img src={logoR6} alt="Logo" className="secondary-header-logo" />
        <nav className="secondary-header-nav">
          <a href="/usermarket" className="secondary-header-link">MarketPlace</a>
          <a href="#perfil" className="secondary-header-link">Inventario</a>
        </nav>
      </div>
      <div className="right-navs">
        <div className="money-container">
          <p className="money-display">Dinero: ${user.money}</p>
          <button className="money-button" onClick={() => addMoney(10)}>Sumar 10</button>
          <button className="money-button" onClick={() => addMoney(50)}>Sumar 50</button>
          <button className="money-button" onClick={() => addMoney(100)}>Sumar 100</button>
        </div>
        <div className="user-info">
          <p className="username-display">{username}</p>
          <button className="logout-button" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
};

export default SecondaryHeader;
