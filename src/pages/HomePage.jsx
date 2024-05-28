import TertiaryHeader from "../components/TertiaryHeader";
import Deimos from "../assets/r6s-operator-deimos.png";
import "../css/Home.css";

const HomePage = () => {
	return (
		<div>
			<TertiaryHeader />
			<div className="home-container">
				<div className="left-container">
					<h2>¡Bienvenido al Marketplace de Rainbow Six Siege!</h2>
					<p>
						En nuestro Marketplace, los jugadores pueden comprar una amplia variedad de skins de armas,
						permitiéndote personalizar tu arsenal y destacar en el campo de batalla.
					</p>
					<br />
					<br />
					<p>
						No olvides registrarte e iniciar sesión para acceder a todas las funcionalidades y comenzar a
						mejorar tu experiencia de juego.
					</p>
					<p>¡Únete ahora y lleva tu juego al siguiente nivel!</p>
				</div>
				<div className="right-container">
					<img src={Deimos} alt="Deimos" className="Deimos" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
