import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-white shadow-sm sticky-top py-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center">
                    <i className="fas fa-heart text-pink me-2"></i>
                    SoulMate Matrimony
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="fw-medium mx-2">Home</Nav.Link>
                        <Nav.Link href="#members" className="fw-medium mx-2">Active Members</Nav.Link>
                        <Nav.Link href="#plans" className="fw-medium mx-2">Premium Plans</Nav.Link>
                        <Nav.Link href="#stories" className="fw-medium mx-2">Happy Stories</Nav.Link>
                        <Nav.Link href="#contact" className="fw-medium mx-2">Contact Us</Nav.Link>

                        <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
                            <Button as={Link} to="/login" variant="outline-dark" className="me-2 rounded-pill px-4">
                                Login
                            </Button>
                            <Button as={Link} to="/register" className="btn-pink rounded-pill px-4 text-white">
                                Registration
                            </Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
