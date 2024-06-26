import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

import "../css/UserProfile.css";
import Solis from "../assets/solis.png";
import BuyCredits from "../components/BuyCredits";
import Spinner from "../components/Spinner";

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
		return <Spinner />;
	}

	return (
		<div>
			<div className="home-container">
				<div className="left-container">
					<h1>Bienvenido {userInformation.username}</h1>
					<h4>
						Aquí encontrarás tu información personal. <br />
						Si necesitas comprar créditos para tus futuras compras, presiona uno de los botones con la
						cantidad deseada.
					</h4>
					<div className="inner-container">
						<div className="user-info-container">
							<div className="user-info">
								<h3>EMAIL: {userInformation.email}</h3>
								<h3>DINERO: {userInformation.money}</h3>
								<h3>RANGO DE COMPRADOR: {userInformation.customer_rank}</h3>
								<h3>TIPO DE USUARIO: {userInformation.type_user}</h3>
							</div>
						</div>
						<div className="BuyCRS-container">
							<div className="buy-credits-container">
								<BuyCredits />
							</div>
						</div>
					</div>
				</div>
				<div className="right-container">
					<img src={Solis} alt="Solis" className="Solis" />
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
