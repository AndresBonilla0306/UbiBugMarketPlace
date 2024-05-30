import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

import "../css/Product.css";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({
		product_id: null,
		name: null,
		description: null,
		image: null,
		price: null,
		rarity: null,
		rarity_id: null,
	});
	const [isLoading, setIsLoading] = useState(true);

	const { user, getUserDetailsFromDB } = useContext(UserContext);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products/${id}`);
				setProduct(res.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching product details:", error);
				await Swal.fire({
					title: "Error en el formulario",
					text: error.response.data.msg,
					icon: "error",
					confirmButtonText: "Continuar",
				});
				navigate("/usermarket");
				setIsLoading(false);
			}
		};

		fetchProductDetails();
	}, [id]);

	const handleBuy = async () => {
		// 1.  Verificar que el usuario puede comprar el producto
		if (user.money < product.price) {
			await Swal.fire({
				title: "No tienes suficiente dinero",
				text: `No posees la cantidad suficiente de dinero para comprar este producto. Te hace falta ${
					product.price - user.money
				} CP para adquirla.`,
				icon: "error",
				confirmButtonText: "Entendido",
			});
		}

		// 2. Si tiene dinero disponible, hacer la petición al servidor para añadir el arma al inventario
		const res = await axios.post(`${import.meta.env.VITE_INVENTORIES_MICROSERVICE}/inventories`, {
			user_id: user.user_id,
			product_id: product.product_id,
		});

		// 3. Actualizar información del usuario
		await getUserDetailsFromDB();

		await Swal.fire({
			title: "Artículo comprado correctamente",
			text: `Disfruta de tu nueva adquicisión: ${res.data.product_name}`,
			icon: "success",
			confirmButtonText: "Entendido",
		});

		console.log(res);
		navigate("/usermarket");

		console.log("Producto comprado:", product.name);
	};

	const handleDeleteProduct = async () => {
		try {
			axios.delete(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products/${product.product_id}`);

			await Swal.fire({
				title: "Artículo eliminado correctamente",
				text: `El producto ha sido eliminado con éxito.`,
				icon: "success",
				confirmButtonText: "Entendido",
			});

			navigate("/usermarket");
		} catch (error) {
			await Swal.fire({
				title: "Error en el formulario",
				text: error.response.data.msg,
				icon: "error",
				confirmButtonText: "Continuar",
			});
		}
	};

	if (!product) {
		return <div className="product-container">Cargando...</div>;
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="product-container">
			<div className="product-details">
				{product.image !== null ? (
					<img className="product-image" src={product.image}></img>
				) : (
					<p>No image :P</p>
				)}
				<h1>Detalles del Producto {product.id}</h1>
				<h1>Nombre: {product.name}</h1>
				<h2>Descripción: {product.description}</h2>
				<h2>Precio: {product.price}$</h2>
				<h2>Rareza: {product.rarity}</h2>

				{user.type_user === "USER" ? (
					<button className="login-button" onClick={handleBuy}>
						Comprar
					</button>
				) : (
					<button onClick={handleDeleteProduct}>Eliminar</button>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
