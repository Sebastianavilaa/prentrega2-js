import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/data.json';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
	const [products, setProducts] = useState([]);
	const [cargando, setCargando] = useState(true);

	const id = useParams().id;

	useEffect(() => {
		console.log('ID:', id);
		setProducts(id ? data.filter((p) => p.cat === id) : data);
		setCargando(false);
	}, [id]);
	

	if (cargando) return 'Cargando...';
	if (!products) return 'Producto no encontrado';
	return (
		<Container className="mt-4 d-flex flex-wrap justify-content-center w-100 align-items-center gap-4">
			{products.map((p) => (
				<Card style={{ width: '18rem' }} key={p.id}>
					<Card.Img variant="top" src={p.image} />
					<Card.Body>
						<Card.Title>{p.Name}</Card.Title>
						<Card.Text>
							${p.price}
						</Card.Text>
						<Card.Text>
							{p.cat}
						</Card.Text>
						<Link to={`/item/${p.id}`}>
							<Button variant="primary">Ver Detalle</Button>
						</Link>
					</Card.Body>
				</Card>
			))}
		</Container>
	);
}
