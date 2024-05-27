// src/components/SecondaryHeader.js
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context/UserContext";

import "../App.css";
import logoR6 from "../assets/r6s-logo.png";

const SecondaryHeader = () => {
	const { user, logout, setUser } = useContext(UserContext);
	const [username, setUsername] = useState("");

	const updateMoney = async (amount) => {
		try {
			const newMoney = user.money + amount;
			const res = await axios.put(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/${user.user_id}`, {
				money: newMoney,
			});
			setUser(res.data);
		} catch (error) {
			console.error("Error updating money:", error);
		}
	};

	const addMoney = (amount) => {
		updateMoney(amount);
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
					<Link to="/usermarket" className="secondary-header-link">
						MarketPlace
					</Link>
					<Link to="/inventory" className="secondary-header-link">
						Inventario
					</Link>
					<Link to="/userProfile" className="secondary-header-link">
						Perfil
					</Link>
				</nav>
			</div>
			<div className="right-navs">
				<div className="money-container">
					<p className="money-display">Dinero: ${user.money}</p>
					<button className="money-button" onClick={() => addMoney(10)}>
						Sumar 10
					</button>
					<button className="money-button" onClick={() => addMoney(50)}>
						Sumar 50
					</button>
					<button className="money-button" onClick={() => addMoney(100)}>
						Sumar 100
					</button>
				</div>
				<div className="user-info">
					<p className="username-display">{username}</p>
					<button className="logout-button" onClick={logout}>
						Cerrar sesión
					</button>
				</div>
			</div>
		</header>
	);
};

export default SecondaryHeader;
