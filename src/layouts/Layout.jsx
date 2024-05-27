import { Outlet } from "react-router-dom";
import SecondaryHeader from "../components/SecondaryHeader";

const Layout = () => {
	return (
		<>
			<SecondaryHeader />
			<Outlet />
		</>
	);
};

export default Layout;
