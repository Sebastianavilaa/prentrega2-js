import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/Config';
import{getDoc, doc} from 'firebase/firestore';

import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [cargando, setCargando] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const docref = doc(db, 'products', id);
		getDoc(docref)
			.then((res) => setProduct({ id: res.id, ...res.data() }))
			.finally(() => setCargando(false));
	}, [id]);

	if (cargando) return 'Cargando...';
	if (!product) return 'Producto no encontrado';

	return (
		<ItemDetail product={product} />
	);
}
