import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContexts';


import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import CarritoItemList from './CarritoItemList';

export default function Carrito() {
	const { carrito, Total, Vaciar } = useContext(CartContext);
	const Navigate = useNavigate();

	const handleClick = (p) => {
		Navigate(`/item/${p.id}`);
	};

	return (
		<Container className="mt-4 d-flex flex-wrap justify-content-center w-100 align-items-center gap-4">
			<Row
				xs={1}
				md={2}
				className="g-4 align-content-center align-items-center justify-content-center w-100 m-auto"
			>
				{carrito.length === 0 ? (
					<p className="w-100">No hay productos en el carrito</p>
				) : (
					<CarritoItemList handleClick={handleClick} carrito={carrito} />
				)}
			</Row>
			{carrito.length >= 1 && (
				<Container className="d-flex w-100 justify-content-between mt-4">
					<p>Total: ${Total()}</p>
					<button onClick={Vaciar}>Vaciar carrito</button>
					<button onClick={() => Navigate('/checkout')}>Finalizar Compra</button>
				</Container>
			)}
		</Container>
	);
}
