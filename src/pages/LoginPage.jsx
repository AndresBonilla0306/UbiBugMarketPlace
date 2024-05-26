import React from 'react';
import TertiaryHeader from '../components/TertiaryHeader';
import Login from '../components/Login';
import '../App.css'

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <TertiaryHeader/>
      <Login/>
    </div>
  );
};

export default LoginPage;
