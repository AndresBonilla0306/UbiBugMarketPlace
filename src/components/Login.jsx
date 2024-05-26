import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../assets/Ubisoft-logoV2.png'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <header className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> 
        </div>
        <h2>Login</h2>
        <div className="form-group">  {/*Usuariosa */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group"> {/*el correo */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group"> {/*contra */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Ingresar</button>
      </form>
    </header>
  );
};

export default Login;