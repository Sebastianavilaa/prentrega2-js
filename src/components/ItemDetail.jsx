import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContexts';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
	const { AgregarAlCarrito } = useContext(CartContext);
	const [cantidad, setCantidad] = useState(1);

	const comprar = (product, cantidad) => {
		AgregarAlCarrito(product, cantidad);
		setCantidad(1);
	};

	return (
		<Container className="d-flex justify-content-center mt-4 align-items-center ">
			<Card className="w-50">
				<Card.Img variant="top" src={product.image} />
				<Card.Body>
					<Card.Title>{product.Name}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
					<Card.Text>{product.cat}</Card.Text>
					<Card.Text>{product.stock}</Card.Text>
					<Card.Text>
						<ItemCount setCantidad={setCantidad} cantidad={cantidad} product={product} />
					</Card.Text>
					<Button
						variant="primary"
						size="lg"
						onClick={() => comprar(product, cantidad)}
					>
						Comprar
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}
