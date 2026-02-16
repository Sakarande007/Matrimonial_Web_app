import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="register-section py-5 bg-light flex-grow-1">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card className="card-shadow border-0 p-4 p-md-5">
                            <div className="text-center mb-4">
                                <h3 className="fw-bold">Create Your Profile</h3>
                                <p className="text-muted">Join millions of happy members</p>
                            </div>
                            <Form>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Profile Created For</Form.Label>
                                            <Form.Select>
                                                <option>Self</option>
                                                <option>Son</option>
                                                <option>Daughter</option>
                                                <option>Sibling</option>
                                                <option>Friend</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Gender</Form.Label>
                                        <div className="d-flex gap-3">
                                            <Form.Check type="radio" label="Male" name="gender" />
                                            <Form.Check type="radio" label="Female" name="gender" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control type="date" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Religion</Form.Label>
                                            <Form.Select>
                                                <option>Hindu</option>
                                                <option>Muslim</option>
                                                <option>Christian</option>
                                                <option>Sikh</option>
                                                <option>Jain</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Mother Tongue</Form.Label>
                                            <Form.Select>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Marathi</option>
                                                <option>Tamil</option>
                                                <option>Telugu</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="tel" placeholder="9876543210" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="email@example.com" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} className="text-center mt-4">
                                        <Button className="btn-pink px-5 py-2 rounded-pill fw-bold btn-lg">
                                            Register Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            <div className="text-center mt-3">
                                <p className="mb-0">Already a member? <Link to="/login" className="text-pink text-decoration-none fw-bold">Login</Link></p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
