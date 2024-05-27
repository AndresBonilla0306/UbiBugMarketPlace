import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

import "../css/UserProfile.css";
import Solis from "../assets/solis.png";

const UserProfile = () => {
	const [userInformation, setUserInformation] = useState({
		user_id: null,
		username: null,
		email: null,
		money: null,
		customer_rank: null,
		rank: null,
		rank_id: null,
		type_user: null,
	});
	const [isLoading, setIsLoading] = useState(false);

	const { user } = useContext(UserContext);

	useEffect(() => {
		getUserInformation();
	}, []);

	const getUserInformation = async () => {
		setIsLoading(true);
		// Bring the user inventory from backend
		const res = await axios.get(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/${user.user_id}`);
		setUserInformation(res.data);
		setIsLoading(false);
	};

	// Wait until the information is being brought from DB.
	if (isLoading) {
		return <h1>CARGANDO...</h1>;
	}

	return (
		<div>
			<div className="home-container">
				<div className="left-container">
					<h2>Info perfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiil</h2>
					<p>USERNAME: {userInformation.username}</p>
					<p>EMAIL: {userInformation.email}</p>
					<p>DINERO: {userInformation.money}</p>
					<p>RANGO DE COMPRADOR: {userInformation.customer_rank}</p>
					<p>TIPO DE USUARIO: {userInformation.type_user}</p>
				</div>

				<div className="right-container">
					<img src={Solis} alt="Solis" className="Solis" />
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
