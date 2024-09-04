import { Link } from 'react-router-dom'


export default function CheckoutVacio() {
  return (
    <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/'>Volver a la tienda</Link>
    </div>
  )
}

