import { useForm } from 'react-hook-form';
import { CartContext } from '../contexts/CartContexts';
import { useContext } from 'react';
import CheckoutComprar from './CheckoutComprar';
import CheckoutVacio from './CheckoutVacio';


export default function CheckoutContainer() {
  const {carrito, comprar, pedido, setPedido} = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <CheckoutComprar carrito={carrito} register={register} handleSubmit={handleSubmit} comprar={comprar} pedido={pedido} setPedido={setPedido} errors={errors}/>
    </>
  )
}
