import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import SecondaryHeader from "../components/SecondaryHeader";

const UserInventory = () => {
	const [userInventory, setUserInventory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { user } = useContext(UserContext);

	useEffect(() => {
		getUserInventory();
	}, []);

	const getUserInventory = async () => {
		setIsLoading(true);
		// Bring the user inventory from backend
		const res = await axios.get(
			`${import.meta.env.VITE_INVENTORIES_MICROSERVICE}/inventories/?username=${user.username}`
		);
		setUserInventory(res.data);
		setIsLoading(false);
	};

	// Wait until the information is being brought from DB.
	if (isLoading) {
		<SecondaryHeader />;
		return <h1>CARGANDO...</h1>;
	}

	return (
		<>
			<SecondaryHeader />
			<h1>HOLA, SOY EL INVENTARIO</h1>
			{userInventory.map((item) => (
				<div key={item.inventory_id}>
					<p>Nombre: {item.product_name}</p>
					<p>Rareza: {item.rarity_name}</p>
					<p>Fecha de obtención: {item.created_at}</p>
				</div>
			))}
		</>
	);
};

export default UserInventory;
