import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" className=" p-3    fixed-top ">
            <Container>
                <Navbar.Brand href="#home" className='Logo  text-white'>Delicious</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto ">
                        <Nav.Link>
                            <Link className=" link" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className=" link" to="/About">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className=" link" to="/menu ">Menu</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className=" link" to="/Contact">Contact</Link>
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation