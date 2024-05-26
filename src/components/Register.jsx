import React, { useState } from 'react';
import '../css/Register.css'; 
import logo from '../assets/Ubisoft-logoV2.png'

const Register = () => {
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
    <header className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> 
        </div>
        <h2>Register</h2>
        <div className="form-group">  {/* Usuario */}
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
        <div className="form-group"> {/* Correo */}
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
        <div className="form-group"> {/* Contraseña */}
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
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </header>
  );
};

export default Register;
