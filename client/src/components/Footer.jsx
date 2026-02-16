import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="g-4 mb-4">
                    <Col md={4}>
                        <h4 className="fw-bold mb-3">
                            <i className="fas fa-heart text-pink me-2"></i>
                            SoulMate
                        </h4>
                        <p className="text-white-50">
                            Leading matrimonial service provider for those seeking their perfect soulmate. Trusted by millions of happy couples.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white hover-pink"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover-pink"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover-pink"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white hover-pink"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-2"><Link to="/" className="text-decoration-none text-white-50 hover-white">Home</Link></li>
                            <li className="mb-2"><a href="#members" className="text-decoration-none text-white-50 hover-white">Active Members</a></li>
                            <li className="mb-2"><a href="#plans" className="text-decoration-none text-white-50 hover-white">Premium Plans</a></li>
                            <li className="mb-2"><a href="#contact" className="text-decoration-none text-white-50 hover-white">Contact Us</a></li>
                            <li className="mb-2"><Link to="/login" className="text-decoration-none text-white-50 hover-white">Login</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Contact Info</h5>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-2"><i className="fas fa-map-marker-alt me-2 text-pink"></i> 123 Love Street, Mumbai, India</li>
                            <li className="mb-2"><i className="fas fa-phone me-2 text-pink"></i> +91 98765 43210</li>
                            <li className="mb-2"><i className="fas fa-envelope me-2 text-pink"></i> info@soulmate.com</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="border-secondary" />
                <div className="text-center text-white-50 small">
                    &copy; {new Date().getFullYear()} SoulMate Matrimony. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
