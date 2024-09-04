import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContexts';



export default function Item({ item }) {

    const { AgregarAlCarrito } = useContext(CartContext);
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={item.image} />
			<Card.Body>
				<Card.Title>{item.Name}</Card.Title>
				<Card.Text>${item.price}</Card.Text>
				<Card.Text>{item.cat}</Card.Text>
				<Link to={`/item/${item.id}`} className="m-2">
					<Button variant="primary">Ver Detalle</Button>
				</Link>
				<Button
					variant="primary"
					onClick={() => { AgregarAlCarrito(item, 1)} }
				>
					Comprar
				</Button>
				
			</Card.Body>
		</Card>
	);
}
