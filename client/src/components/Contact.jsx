import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Contact Us</h2>
                    <div className="bg-pink mx-auto" style={{ height: '3px', width: '60px' }}></div>
                </div>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card className="card-shadow border-0 p-4 p-md-5">
                            <Form>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={5} placeholder="How can we help you?" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} className="text-center">
                                        <Button className="btn-pink px-5 py-2 rounded-pill fw-bold mt-3">
                                            Send Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
