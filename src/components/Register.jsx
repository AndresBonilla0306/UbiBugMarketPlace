import React, { useState } from 'react';
import '../css/Register.css'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../assets/Ubisoft-logoV2.png'
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    money: 100,
    customer_rank: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(); // Aseguramos que se espera a que la función se complete antes de continuar
    console.log(formData);
  };

  const createUser = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/`, {
        username: formData.username,
        password: formData.password,
        email: formData.email, 
        money: formData.money,
        customer_rank: formData.customer_rank
      });
      
      console.log("Respuesta del servidor:", res.data);
      if (res.data.success) {
        Swal.fire({
          title: '¡Registro Exitoso!',
          text: 'Tu cuenta ha sido creada con éxito',
          icon: 'success',
          confirmButtonText: 'Continuar'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: res.data.message || 'Ocurrió un error al crear la cuenta',
          icon: 'error',
          confirmButtonText: 'Volver a intentar'
        });
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al crear la cuenta',
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      });
    }
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
