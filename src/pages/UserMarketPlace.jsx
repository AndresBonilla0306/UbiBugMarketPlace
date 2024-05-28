import Products from "../components/Products";
import "../App.css";

const UserMarketPlace = () => {
	return (
		<div>
			<h1 class="product-ContentUserH1">¡Bienvenido al MarketPlace de R6!</h1>
			<h2 class="product-ContentUserH1">Aquí encontraras diferentes skins para comprar</h2>
			<Products />
		</div>
	);
};

export default UserMarketPlace;
