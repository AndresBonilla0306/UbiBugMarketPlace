import { useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BuyCredits = () => {
	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	const addMoney = async (amount) => {
		try {
			const res = await axios.put(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/${user.user_id}`, {
				money: user.money + amount,
			});

			// If the request has been executed successfully
			if (res.status === 200) {
				console.log(res);
				console.log("se actualizó la cantidad de dinero");
				setUser(res.data);
				await Swal.fire({
					title: "Compra exitosa",
					text: `Tu saldo se ha actualizado correctamente. Disfruta tus futuras compras.`,
					icon: "success",
					confirmButtonText: "Continuar",
				});
				navigate("/usermarket");
			} else {
				await Swal.fire({
					title: "ERROR",
					text: `ERROR NO PREVISTO`,
					icon: "error",
					confirmButtonText: "Continuar",
				});
			}
		} catch (error) {
			console.error("Error updating money:", error);
		}
	};

	return (
		<div>
			<h2>¿Necesitas dinero?</h2>
			<p>Compra tus créditos para adquirir productos en nuestra tienda</p>
			<div className="right-navs">
				<div className="money-container">
					<button className="money-button" onClick={() => addMoney(10)}>
						Comprar 10 CR
					</button>
					<button className="money-button" onClick={() => addMoney(50)}>
						Comprar 50 CR
					</button>
					<button className="money-button" onClick={() => addMoney(100)}>
						Comprar 100 CR
					</button>
				</div>
			</div>
		</div>
	);
};

export default BuyCredits;
