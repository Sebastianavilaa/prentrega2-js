import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {db } from '../firebase/Config';
import { getDocs, collection, where, query } from "firebase/firestore";


import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

export default function ItemListContainer({ greeting }) {
	const [products, setProducts] = useState([]);
	const [cargando, setCargando] = useState(true);

	const id = useParams().id;

	useEffect(() => {
		const ref = !id ? collection(db, 'products'): query(collection(db, 'products'), where('cat', '==', id));

		getDocs(ref)
			.then((res) =>{
				setProducts(res.docs.map((doc) => { return { ...doc.data(), id: doc.id } } ));
			} )
			.finally(() => setCargando(false));
	}, [id]);

	if (cargando) return 'Cargando...';
	if (!products) return 'Producto no encontrado';
	return (
		<Container className="mt-4 d-flex flex-wrap justify-content-center w-100 align-items-center gap-4">
			<ItemList products={products} />
		</Container>
	);
}
