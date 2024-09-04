import { createContext, useEffect, useState } from 'react';

import {collection, addDoc} from "firebase/firestore";
import { db } from "../firebase/Config";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

export const Provider = ({ children }) => {
	const [carrito, setCarrito] = useState(carritoInicial);
	const [pedido, setPedido] = useState('');

	const AgregarAlCarrito = (item, cantidad) => {
		const Agregaritem = { ...item, cantidad: cantidad };

		const CarritoNuevo = [...carrito];
		const Existente = CarritoNuevo.find((i) => i.id === Agregaritem.id);
		if (Existente) {
			Existente.cantidad = Existente.cantidad + cantidad;
		} else {
			CarritoNuevo.push(Agregaritem);
		}
		setCarrito(CarritoNuevo);
	};

	const comprar = (data) => {
		const pedido = {
			cliente: data,
			articulos: carrito,
			total: Total(),
			fecha: new Date(),
		};

		console.log(pedido);

		const pedidosref = collection(db, "pedidos");

		addDoc(pedidosref, pedido).then(({id}) => {
			setPedido(id);	

			Vaciar();
		});
	};


	const CantidadCarrito = () => {
		return carrito.reduce((total, item) => total + item.cantidad, 0);
	};

	const Total = () => {
		return carrito.reduce(
			(total, item) => total + item.price * item.cantidad,
			0,
		);
	};

	const Vaciar = () => {
		setCarrito([]);
	};

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito));
	}, [carrito]);

	return (
		<CartContext.Provider
			value={{
				carrito,
				AgregarAlCarrito,
				Total,
				CantidadCarrito,
				Vaciar,
				setCarrito,
				comprar,
				pedido,
				setPedido,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
