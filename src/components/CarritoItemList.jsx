import React from 'react';
import CarritoItem from './CarritoItem';
import Col from 'react-bootstrap/Col';

export default function CarritoItemList({ handleClick, carrito }) {
	return carrito.map((item, idx) => (
		<Col key={idx} style={{ width: '18rem' }}>
			<CarritoItem item={item} handleClick={handleClick} />
		</Col>
	));
}
