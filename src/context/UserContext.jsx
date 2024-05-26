import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_id: null,
    username: null,
    email: null,
    money: null,
    customer_rank: null,
    rank: null,
    rank_id: null,
  });

  const navigate = useNavigate();

  const logout = () => {
    setUser({
      user_id: null,
      username: null,
      email: null,
      money: null,
      customer_rank: null,
      rank: null,
      rank_id: null,
    });
    navigate('/login');
  };

  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/current`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout, fetchUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};