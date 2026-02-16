import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Plans = () => {
    return (
        <section id="plans" className="section-padding">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Premium Plans</h2>
                    <div className="bg-pink mx-auto" style={{ height: '3px', width: '60px' }}></div>
                    <p className="text-muted mt-2">Choose the best plan for you</p>
                </div>
                <Row className="g-4 align-items-center">
                    {/* Free Plan */}
                    <Col md={4}>
                        <Card className="card-shadow border-0 text-center h-100">
                            <Card.Body className="p-4">
                                <h5 className="fw-bold text-muted">FREE</h5>
                                <h2 className="display-4 fw-bold my-3">₹0</h2>
                                <ul className="list-unstyled mb-4 text-start small">
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Browse Profiles</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Shortlist & Send Interest</li>
                                    <li className="text-muted mb-2"><i className="fas fa-times me-2"></i> View Contact Details</li>
                                    <li className="text-muted"><i class="fas fa-times me-2"></i> Chat with Members</li>
                                </ul>
                                <Button variant="outline-dark" className="rounded-pill px-4 w-100">Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Gold Plan (Highlighted) */}
                    <Col md={4}>
                        <Card className="card-shadow border-0 text-center scale-up shadow-lg" style={{ transform: 'scale(1.05)', zIndex: 1 }}>
                            <div className="bg-pink text-white py-2 fw-bold small rounded-top">MOST POPULAR</div>
                            <Card.Body className="p-4">
                                <h5 className="fw-bold text-pink">GOLD</h5>
                                <h2 className="display-4 fw-bold my-3">₹2999</h2>
                                <p className="text-muted">3 Months</p>
                                <ul className="list-unstyled mb-4 text-start">
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Browse & Shortlist</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Send Unlimited Messages</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> View 50 Contacts</li>
                                    <li className="text-muted"><i className="fas fa-times me-2"></i> Dedicated Manager</li>
                                </ul>
                                <Button className="btn-pink rounded-pill px-4 w-100">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Platinum Plan */}
                    <Col md={4}>
                        <Card className="card-shadow border-0 text-center h-100">
                            <Card.Body className="p-4">
                                <h5 className="fw-bold text-muted">PLATINUM</h5>
                                <h2 className="display-4 fw-bold my-3">₹5999</h2>
                                <p className="text-muted">6 Months</p>
                                <ul className="list-unstyled mb-4 text-start small">
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> All Gold Features</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> View 150 Contacts</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Profile Highlighter</li>
                                    <li className="mb-2"><i className="fas fa-check text-pink me-2"></i> Priority Support</li>
                                </ul>
                                <Button variant="outline-dark" className="rounded-pill px-4 w-100">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Plans;
