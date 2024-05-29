import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "../css/UserInventory.css";  

const UserInventory = () => {
    const [userInventory, setUserInventory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useContext(UserContext);

    useEffect(() => {
        getUserInventory();
    }, []);

    const getUserInventory = async () => {
        setIsLoading(true);
        // Trae el inventario del usuario desde el backend
        const res = await axios.get(
            `${import.meta.env.VITE_INVENTORIES_MICROSERVICE}/inventories/?username=${user.username}`
        );
        setUserInventory(res.data);
        setIsLoading(false);
    };

    // Espera hasta que la información se traiga de la base de datos.
    if (isLoading) {
        return <h1 className="loading">CARGANDO...</h1>;
    }

    return (
        <>
            <h1 className="title">Este es tu inventario<br></br>
				Aquí encontraras todos tus productos comprados
			</h1>
            <div className="inventory">
                {userInventory.map((item) => (
                    <div key={item.inventory_id} className="card">
                        <p>Nombre: {item.product_name}</p>
                        <p>Rareza: {item.rarity_name}</p>
                        <p>Fecha de obtención: {item.created_at}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserInventory;
