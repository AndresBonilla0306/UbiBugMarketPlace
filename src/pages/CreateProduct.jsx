import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import BIce from "../assets/BIce.png";
import "../css/CreateProduct.css";

const CreateProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [rarities, setRarities] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		getRaritiesDB();
	}, []);

	const getRaritiesDB = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/rarities`);
			setRarities(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async (data) => {
		try {
			console.log(data);
			// Preparar información para enviar imagen y datos al servidor
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("description", data.description);
			formData.append("price", data.price);
			formData.append("rarity", data.rarity);

			console.log(data.image);
			console.log(data.image[0]);

			// Asegúrate de verificar que se haya seleccionado una imagen
			if (data.image[0]) {
				formData.append("image", data.image[0]);
			}

			// TODO: IMAGEN
			// data.image = "test-URL";
			const res = await axios.post(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products`, formData, {
				"Content-Type": "multipart/form-data",
			});

			// const res = await axios.post(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products`, data);
			console.log(res);

			if (res.status === 201) {
				await Swal.fire({
					title: "Producto creado exitosamente",
					text: `Producto ${data.name} creado correctamente`,
					icon: "success",
					confirmButtonText: "Continuar",
				});

				navigate("/usermarket");
				return;
			}
			console.log("No debería aparecer");
		} catch (error) {
			await Swal.fire({
				title: "Error en el formulario",
				text: error.response.data.msg,
				icon: "error",
				confirmButtonText: "Continuar",
			});
		}
	};

	if (isLoading) {
		return (
			<>
				<h1>Cargando...</h1>
			</>
		);
	}

	return (
		<div className="container">
			<div className="left-side">
				<div className="form-container">
					<h1>CREAR PRODUCTO</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="name">Nombre:</label>
							<input id="name" {...register("name", { required: true })} />
							{errors.name && <p>Name is required.</p>}
						</div>
						<div>
							<label htmlFor="description">Descripción:</label>
							<input id="description" {...register("description", { required: true })} />
							{errors.description && <p>Description is required.</p>}
						</div>
						<div>
							<label htmlFor="price">Precio:</label>
							<input type="number" id="price" {...register("price", { required: true })} />
							{errors.price && <p>Price is required.</p>}
						</div>
						<div>
							<label htmlFor="rarity">Rareza:</label>
							<select id="rarity" {...register("rarity", { required: true })}>
								{rarities.map((rarity) => (
									<option key={rarity.rarity_id} value={rarity.rarity_id}>
										{rarity.name}
									</option>
								))}
							</select>
							{errors.rarity && <p>Rarity is required.</p>}
						</div>
						<label htmlFor="image">Image:</label>
						<input type="file" id="image" {...register("image", { required: true })} />
						{errors.image && <p>Image is required.</p>}
						<button type="submit">Crear Prod</button>
					</form>
				</div>
			</div>
			<div className="right-side">
				<img src={BIce} alt="BIce" className="BIce" />
			</div>
		</div>
	);
};

export default CreateProduct;
