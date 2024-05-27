import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserMarketPlace from "./pages/UserMarketPlace";
import UserInventory from "./pages/UserInventory.jsx";
import ProductDetails from "./pages/ProductDetails";
import UserProfile from "./pages/UserProfile.jsx";
import AmdinProfile from "./pages/AdminPage.jsx";
import Crproduct from "./pages/CreateProduct.jsx";
import CrUser from "./pages/CreateUser.jsx";

function App() {
	return (
		<>
			<Router>
				<UserProvider>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/usermarket" element={<UserMarketPlace />} />
						<Route path="/product/:id" element={<ProductDetails />} />
						<Route path="/inventory" element={<UserInventory />} />
						<Route path="/UserProfile" element={<UserProfile />} />
						<Route path="/Admin" element={<AmdinProfile />} />
						<Route path="/crProduct" element={<Crproduct />} />
						<Route path="/crUser" element={<CrUser />} />
					</Routes>
				</UserProvider>
			</Router>
		</>
	);
}

export default App;
