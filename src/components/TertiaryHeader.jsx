import { Link } from "react-router-dom";

import "../App.css";
import logoR6 from "../assets/r6s-logo.png";

const TertiaryHeader = () => {
	return (
		<header className="tertiary-header">
			<img src={logoR6} alt="Logo" className="secondary-header-logo" />
			<nav className="tertiary-header-nav">
				<Link to="/" className="secondary-header-link">
					Home
				</Link>
				<Link to="/login" className="secondary-header-link">
					Iniciar sesión
				</Link>
				<Link to="/register" className="secondary-header-link">
					Registrarse
				</Link>
			</nav>
		</header>
	);
};

export default TertiaryHeader;
