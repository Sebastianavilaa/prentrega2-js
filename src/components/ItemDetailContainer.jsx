import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from '../data/data.json';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [cargando, setCargando] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		new Promise((resolve) => setTimeout(() => resolve(data), 2000))
			.then((data) => {
				const foundProduct = data.find((p) => p.id === Number(id));
				if (!foundProduct) throw new Error('Product not found');
				setProduct(foundProduct);
			})
			.catch((error) => console.error(error))
			.finally(() => setCargando(false));
	}, [id]);

	if (cargando) return 'Cargando...';
	if (!product) return 'Producto no encontrado';

	return (
		<Container className="d-flex justify-content-center mt-4 align-items-center">
			<Card className='w-25'>
				<Card.Img variant="top" src={product.image} />
				<Card.Body>
					<Card.Title>{product.Name}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
					<Card.Text>{product.cat}</Card.Text>
					<Card.Text>
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<Button variant="primary" size="lg">
						Comprar
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}
