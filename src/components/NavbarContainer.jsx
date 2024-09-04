import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


export default function NavbarContainer() {
	return (
		<>
			{['sm'].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className="bg-primary text-white mb-3"
				>
					<Container fluid>
						<Navbar.Brand as={NavLink} to="/">Thecno Shop</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							className='bg-primary text-white'
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									<Navbar.Brand as={NavLink} to="/">Thecno Shop</Navbar.Brand>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body className='gap-3'>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link as={NavLink} to="/">Home</Nav.Link>
									<NavDropdown
										title="Productos"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
									>
										<NavDropdown.Item as={NavLink} to="/cat/tv">
											Tv
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/laptop">
											Laptop
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/headphone">
											HeadPhone
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/watch">
											Watch
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/electronics">
											Electronics
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/phone">
											Phone
										</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/cat/speaker">
											Speaker
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Form className="d-flex">
									
									<CartWidget />
								</Form>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}
