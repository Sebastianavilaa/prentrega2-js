import React from 'react';

export default function ItemCount({ cantidad, setCantidad, product }) {
	const sumar = () => {
		product.stock > cantidad && setCantidad(cantidad + 1);
	};
	const restar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};
	return (
		<>
			{' '}
			<span className="m-2 p-2 bg-primary" onClick={restar}>
				-
			</span>{' '}
			{cantidad}{' '}
			<span className="m-2 p-2 bg-primary" onClick={sumar}>
				+
			</span>{' '}
		</>
	);
}
