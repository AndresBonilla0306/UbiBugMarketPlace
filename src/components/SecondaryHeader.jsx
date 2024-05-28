// src/components/SecondaryHeader.js
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import "../App.css";
import logoR6 from "../assets/r6s-logo.png";

const SecondaryHeader = () => {
	const { user, logout } = useContext(UserContext);
	const [username, setUsername] = useState("");

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
					<p className="money-display">Dinero: ${user.money}</p>
					<div className="user-info">
						{/* <p className="username-display">{username}</p> */}
						<button className="logout-button" onClick={logout}>
							Cerrar sesión
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default SecondaryHeader;
