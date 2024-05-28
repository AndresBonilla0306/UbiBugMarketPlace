import { Link } from "react-router-dom";

import "../App.css";
import logoR6 from "../assets/r6s-logo.png";

const AdminHeader = () => {
	return (
		<header className="tertiary-header">
			<img src={logoR6} alt="Logo" className="secondary-header-logo" />
			<nav className="tertiary-header-nav">
				<Link to="/" className="secondary-header-link">
					Home
				</Link>
				<Link to="/create/product" className="secondary-header-link">
					Crear Producto
				</Link>
				<Link to="/create/user" className="secondary-header-link">
					Crear Usuario
				</Link>
			</nav>
		</header>
	);
};

export default AdminHeader;
