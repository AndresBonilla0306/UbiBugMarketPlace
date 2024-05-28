import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialValue) {
	// Inicializar el estado con el valor guardado en localStorage o con el valor inicial
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Error al leer de localStorage", error);
			return initialValue;
		}
	});

	// Escuchar cambios en storedValue para actualizar localStorage
	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.error("Error al guardar en localStorage", error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
