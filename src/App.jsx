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
import Layout from "./layouts/Layout.jsx";

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

						{/* USER ROUTES */}
						<Route element={<Layout />}>
							<Route path="/usermarket" element={<UserMarketPlace />} />
							<Route path="/product/:id" element={<ProductDetails />} />
							<Route path="/inventory" element={<UserInventory />} />
							<Route path="/userProfile" element={<UserProfile />} />

							{/* ADMIN ROUTES */}
							<Route path="/Admin" element={<AmdinProfile />} />
							<Route path="/create/product" element={<Crproduct />} />
							<Route path="/create/user" element={<CrUser />} />
						</Route>
					</Routes>
				</UserProvider>
			</Router>
		</>
	);
}

export default App;
