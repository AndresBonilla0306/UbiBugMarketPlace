import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { UserContext } from "../context/UserContext";
import "../css/UserInventory.css";
import Spinner from "../components/Spinner";

const UserInventory = () => {
	const [userInventory, setUserInventory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { user } = useContext(UserContext);

	useEffect(() => {
		getUserInventory();
	}, []);

	const getUserInventory = async () => {
		setIsLoading(true);
		// Trae el inventario del usuario desde el backend
		const res = await axios.get(
			`${import.meta.env.VITE_INVENTORIES_MICROSERVICE}/inventories/?username=${user.username}`
		);
		setUserInventory(res.data);
		setIsLoading(false);
	};

	const formatDate = (fechaISO) => {
		// Crea un objeto dayjs con la fecha en formato ISO
		const fecha = dayjs(fechaISO);

		// Formatea la fecha al estilo "DD/MM/YYYY"
		return fecha.format("DD/MM/YYYY");
	};

	// Espera hasta que la información se traiga de la base de datos.
	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<h1 className="title">
				Este es tu inventario<br></br>
				Aquí encontraras todos tus productos comprados
			</h1>
			<div className="inventory">
				{userInventory.map((item) => (
					<div key={item.inventory_id} className="card">
						{item.product_image !== null ? (
							<img className="product-image" src={item.product_image}></img>
						) : (
							<p>No image :P</p>
						)}
						<p>Nombre: {item.product_name}</p>
						<p>Rareza: {item.rarity_name}</p>
						<p>Fecha de obtención: {formatDate(item.created_at)}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UserInventory;
