import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/Ubisoft-logoV2.png";

const Login = () => {
	const navigate = useNavigate();

	const { setUser } = useContext(UserContext);

	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginDB();
		console.log(formData);
	};

	const loginDB = async () => {
		try {
			const res = await axios.post(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/login`, {
				username: formData.username,
				password: formData.password,
			});

			console.log("Respuesta del servidor:", res.data);

			if ((res.data.message = "Login correcto")) {
				setUser(res.data.user);
				Swal.fire({
					title: "¡Bienvenido!",
					text: "Has iniciado sesión correctamente",
					icon: "success",
					confirmButtonText: "Continuar",
				}).then(() => {
					navigate("/usermarket"); // Redirigir a la página de destino
				});
				// Aquí podrías redirigir al usuario a otra página o realizar otra acción.

				// !TODO:
				// setUser(res.data.user)
			} else {
				Swal.fire({
					title: "Oh no!",
					text: "Credenciales incorrectas",
					icon: "error",
					confirmButtonText: "Volver a intentar",
				});
			}
		} catch (error) {
			console.error("Error fetching users:", error);
			Swal.fire({
				title: "Oh no!",
				text: "Credenciales incorrectas",
				icon: "error",
				confirmButtonText: "Volver a intentar",
			});
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="logo-container">
					<img src={logo} alt="Logo" className="logo" />
				</div>
				<h2>Iniciar sesión</h2>
				<div className="form-group">
					{" "}
					{/*Usuariosa */}
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Usuario"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					{" "}
					{/*contra */}
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Contraseña"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" className="login-button">
					Ingresar
				</button>
			</form>
		</div>
	);
};

export default Login;
