import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../contexts/CartContexts';
import { FaRegTrashCan } from "react-icons/fa6";

export default function CarritoItem({ handleClick, item }) {
    const { setCarrito, carrito } = useContext(CartContext);

    // Define la función eliminarCarrito dentro del componente
    const eliminarCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id));
    };

    return (
        <Card className="w-100">
            <Card.Img
                variant="top"
                src={item.image}
                onClick={() => handleClick(item)}
            />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.cantidad}</Card.Text>
                <Card.Text>{item.price * item.cantidad}</Card.Text>
                <Button variant="primary" onClick={() => handleClick(item)}>
                    Ver Item
                </Button>
                <FaRegTrashCan
                    className="ms-3"
                    onClick={() => eliminarCarrito(item.id)} // Asegúrate de pasar el item.id
                />
            </Card.Body>
        </Card>
    );
}
