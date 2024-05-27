import React from 'react';
import TertiaryHeader from '../components/TertiaryHeader';
import '../css/UserProfile.css';
import Solis from '../assets/solis.png'

const UserProfile = () => {  
  return (
    <div>
        <TertiaryHeader/>
        <div className="home-container">
          <div className="left-container">
            
              <h2>Info perfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiil</h2>
              
            
          </div>
          <div className="right-container">
            <img src={Solis} alt="Solis" className="Solis" /> 
          </div>
        </div>
    </div>
  );
};

export default UserProfile;
