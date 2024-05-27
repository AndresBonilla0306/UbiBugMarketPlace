import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		user_id: null,
		username: null,
		email: null,
		money: null,
		customer_rank: null,
		rank: null,
		rank_id: null,
		type_user: null,
	});

	const navigate = useNavigate();

	const logout = () => {
		setUser({
			user_id: null,
			username: null,
			email: null,
			money: null,
			customer_rank: null,
			rank: null,
			rank_id: null,
			type_user: null,
		});
		navigate("/login");
	};

	const fetchUserDetails = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/${user.user_id}`);
			setUser(res.data);
		} catch (error) {
			console.error("Error fetching user details:", error);
		}
	};

	useEffect(() => {
		fetchUserDetails();
	}, []);

	return <UserContext.Provider value={{ user, setUser, logout, fetchUserDetails }}>{children}</UserContext.Provider>;
};
