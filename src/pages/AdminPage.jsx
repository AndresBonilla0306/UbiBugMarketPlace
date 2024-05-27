import React from 'react';
import AdminHeader from '../components/AdminHeader';
import '../css/UserProfile.css';
import Solis from '../assets/Warden_R6S.png'

const AmdinProfile = () => {  
  return (
    <div>
        <AdminHeader/>
        <div className="home-container">
          <div className="left-container">
            
              <h2>¡Bienvenido Administrador! <br></br>
                Aquí puedes crear productos comos Skins de armas y perfiles de jugadores.
              </h2>
              
            
          </div>
          <div className="right-containerr">
            <img src={Solis} alt="Solis" className="Solis" /> 
          </div>
        </div>
    </div>
  );
};

export default AmdinProfile;
