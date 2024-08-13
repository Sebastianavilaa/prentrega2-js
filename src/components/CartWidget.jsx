import cart from '../Assets/shopping-bag.png';

export default function CartWidget() {
	return (
		<>
            <img src={cart} alt="carrito" height={24}/>
            <span>0</span>
		</>
	);
}
