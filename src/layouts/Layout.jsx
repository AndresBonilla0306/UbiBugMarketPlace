import { Outlet } from "react-router-dom";
import SecondaryHeader from "../components/SecondaryHeader";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import AdminHeader from "../components/AdminHeader";

const Layout = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			{user.type_user === "USER" ? <SecondaryHeader /> : <AdminHeader />}
			<Outlet />
		</>
	);
};

export default Layout;
