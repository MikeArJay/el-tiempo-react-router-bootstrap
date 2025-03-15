import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import { WeatherContext } from './WeatherProvider';
import { useContext } from 'react';

function NavigationBar() {
    const {ciudades} = useContext(WeatherContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>El Tiempo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <NavDropdown title="Ciudades" id="basic-nav-dropdown">
                            {ciudades &&
                            ciudades.map((ciudad, index)=>
                            <NavDropdown.Item key={index} as={Link} to={`/ciudades/${ciudad}`}>{ciudad}</NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;