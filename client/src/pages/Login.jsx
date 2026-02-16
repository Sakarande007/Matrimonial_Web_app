import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="login-section flex-grow-1 d-flex align-items-center bg-light py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <Card className="card-shadow border-0 p-4">
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold">Welcome Back</h3>
                                    <p className="text-muted">Login to continue your search</p>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email / Matrimony ID</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" required />
                                    </Form.Group>
                                    <div className="d-flex justify-content-between mb-3">
                                        <Form.Check type="checkbox" label="Remember me" />
                                        <a href="#" className="text-pink text-decoration-none">Forgot Password?</a>
                                    </div>
                                    <Button className="btn-pink w-100 rounded-pill mb-3 fw-bold">Login</Button>
                                    <p className="text-center mb-0">
                                        Don't have an account? <Link to="/register" className="text-pink text-decoration-none fw-bold">Register Free</Link>
                                    </p>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
