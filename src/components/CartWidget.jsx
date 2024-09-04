import { useNavigate } from 'react-router-dom';
import cart from '../Assets/shopping-bag.png';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContexts';

export default function CartWidget() {
	const navigate = useNavigate();

	const {CantidadCarrito} = useContext(CartContext);

	const handleClick = () => {
		navigate('/carrito');
	};

	return (
		<div className='flex items-center gap-2 justify-center mt-2'>
            <img src={cart} alt="carrito" height={24} onClick={handleClick}/>
            <span>{CantidadCarrito()}</span>
		</div>
	);
}
