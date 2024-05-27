import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Product.css";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products/${id}`);
				setProduct(res.data);
			} catch (error) {
				console.error("Error fetching product details:", error);
			}
		};

		fetchProductDetails();
	}, [id]);

	const handleBuy = () => {
		// Aquí puedes agregar la lógica para la compra del producto
		console.log("Producto comprado:", product.name);
	};

	if (!product) {
		return <div className="product-container">Cargando...</div>;
	}

	return (
		<div className="product-container">
			<div className="product-details">
				<h1>Detalles del Producto {product.id}</h1>
				<h1>Nombre: {product.name}</h1>
				<h2>Descripción: {product.description}</h2>
				<h2>Precio: {product.price}$</h2>
				<h2>Rareza: {product.rarity}</h2>
				<button className="login-button" onClick={handleBuy}>
					Comprar
				</button>
			</div>
		</div>
	);
};

export default ProductDetails;
