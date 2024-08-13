import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


export default function NavbarContainer() {
	return (

			<Navbar bg="primary" data-bs-theme="dark">
				<Container className='d-flex flex-wrap align-items-center justify-content-center'>
					<Navbar.Brand to="#home">
						<Nav.Link as={NavLink} to="/">Electronic Components</Nav.Link>
					</Navbar.Brand>
					<Nav className="me-auto d-flex flex-wrap align-items-center justify-content-center">
						<Nav.Link as={NavLink} to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/tv">TV</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/laptop">Laptops</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/headphone">HeadPhone</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/watch">Watch</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/electronics">Electronics</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/phone">Phone</Nav.Link>
						<Nav.Link as={NavLink} to="/cat/speaker">Speaker</Nav.Link>
					</Nav>
					<CartWidget />
				</Container>
			</Navbar>
	);
}
