import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
   
function OffcanvasExample(props) {
  return (
    <>
        {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
            <Navbar.Brand href="#" className='px-5 text-warning'>simple-e-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    simple-e-commerce
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1">
                        <NavDropdown title={props.selectedCategory || 'All'} id="category-dropdown" onSelect={props.handleCategoryChange}>
                            <NavDropdown.Item eventKey="">All</NavDropdown.Item>
                            <NavDropdown.Item eventKey="electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Item eventKey="jewelery">Jewelery</NavDropdown.Item>
                            <NavDropdown.Item eventKey="men's clothing">Men's Clothing</NavDropdown.Item>
                            <NavDropdown.Item eventKey="women's clothing">Women's Clothing</NavDropdown.Item>
                        </NavDropdown>
                    <Form className="d-flex w-100 px-4" >
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={props.handleSearchChange}
                    />
                        <Button className="me-4" variant="outline-warning" onClick={props.handleSearchChange}>Search</Button>
                    </Form>
                        <a href='/cart' className='text-decoration-none text-warning'>
                            <h6 className='d-flex mt-1'>
                            <FontAwesomeIcon className='px-2 mt-1 text-warning' icon={faCartShopping} />
                                Cart
                            </h6>
                        </a>
                </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </>
    );
}

export default OffcanvasExample;