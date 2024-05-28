import "../App.css";
import AvailableProducts from "../components/AvailableProducts";

const UserMarketPlace = () => {
	return (
		<div>
			<h1 className="product-ContentUserH1">¡Bienvenido al MarketPlace de R6!</h1>
			<h2 className="product-ContentUserH1">Aquí encontraras diferentes skins para comprar</h2>
			<AvailableProducts />
		</div>
	);
};

export default UserMarketPlace;
