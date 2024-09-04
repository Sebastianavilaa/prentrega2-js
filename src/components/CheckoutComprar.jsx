import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import CheckoutVacio from './CheckoutVacio';

export default function CheckoutComprar({
	register,
	handleSubmit,
	comprar,
	pedido,
	setPedido,
	carrito,
	errors,
}) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
		setPedido('');
	};

	if (pedido) {
		return (
			<div>
				<h1>Gracias por tu pedido</h1>
				<h3>Numero de pedido: {pedido}</h3>
				<button onClick={handleClick}>Volver</button>
			</div>
		);
	}

	return (
		<>
			{carrito.length === 0 ? (
				<CheckoutVacio />
			) : (
				<Form onSubmit={handleSubmit(comprar)}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name address</Form.Label>
						<Form.Control
							type="text"
							{...register('name', {
								required: 'Name is required',
								minLength: {
									value: 3,
									message:
										'Name must be at least 3 characters',
								},
								maxLength: {
									value: 80,
									message: 'Name cannot exceed 80 characters',
								},
								validate: (value) => {
									if (value.trim().length < 3) {
										return 'Name must be at least 3 characters without leading or trailing spaces';
									}
									if (value.trim() === '') {
										return 'Name cannot be just spaces';
									}
									return true;
								},
							})}
							placeholder="Enter Name"
						/>
						{errors.name && <p>{errors.name.message}</p>}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
									message: 'Invalid email address',
								},
							})}
							placeholder="Enter Email"
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Telefono</Form.Label>
						<Form.Control
							type="tel"
							{...register('phone', {
								required: 'Phone number is required',
								pattern: {
									value: /^[0-9]{10}$/,
									message: 'Invalid phone number',
								},
							})}
							placeholder="Enter Phone"
						/>
						{errors.phone && <p>{errors.phone.message}</p>}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			)}
		</>
	);
}
