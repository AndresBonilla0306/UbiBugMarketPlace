import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context/UserContext";
import "../App.css";

const AvailableProducts = () => {
	const [products, setProducts] = useState([]);

	const { user } = useContext(UserContext);

	useEffect(() => {
		getProductDB();
	}, []);

	const getProductDB = async () => {
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products/available/${user.username}`
			);
			setProducts(res.data);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	const getProductLink = (id) => {
		return `/product/${id}`;
	};

	return (
		<div className="products-container-wrapper">
			<div className="products-container">
				{products.map((product) => (
					<div key={product.product_id} className="product-card">
						{product.image !== null ? (
							<img className="product-image" src={product.image}></img>
						) : (
							<p>No image :P</p>
						)}
						<p className="product-name">Nombre: {product.name}</p>
						<p className={`product-rarity ${product.rarity.toLowerCase()}`}>Rareza: {product.rarity}</p>
						<p>Fecha de obtención: {product.obtained_at}</p>
						<Link to={getProductLink(product.product_id)} className="product-button">
							Ver Detalles
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default AvailableProducts;
