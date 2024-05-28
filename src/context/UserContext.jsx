import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useLocalStorageState("user", {
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

	const getUserDetailsFromDB = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_USERS_MICROSERVICE}/users/${user.user_id}`);
			setUser(res.data);
		} catch (error) {
			console.error("Error fetching user details:", error);
		}
	};

	useEffect(() => {
		getUserDetailsFromDB();
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser, logout, getUserDetailsFromDB }}>{children}</UserContext.Provider>
	);
};
