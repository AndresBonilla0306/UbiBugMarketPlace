import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import "../App.css";
import logoR6 from "../assets/r6s-logo.png";

const AdminHeader = () => {
	const { user, logout } = useContext(UserContext);
	const [username, setUsername] = useState("");

	useEffect(() => {
		if (user) {
			setUsername(user.username);
		}
	}, [user]);
	
	return (
		<header className="tertiary-header">
			<img src={logoR6} alt="Logo" className="secondary-header-logo" />
			<nav className="tertiary-header-nav">
				<Link to="/usermarket" className="secondary-header-link">
					Todos los productos
				</Link>
				<Link to="/create/product" className="secondary-header-link">
					Crear Producto
				</Link>
				<div className="user-info">
						{/* <p className="username-display">{username}</p> */}
						<button className="logout-button" onClick={logout}>
							Cerrar sesión
						</button>
				</div>
			</nav>
		</header>
	);
};

export default AdminHeader;
