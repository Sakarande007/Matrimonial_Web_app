import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Search = () => {
    return (
        <section className="position-relative" style={{ marginTop: '-50px', zIndex: 10 }}>
            <Container>
                <Card className="card-shadow border-0 p-4">
                    <Form>
                        <Row className="g-3 align-items-end">
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">I'm looking for</Form.Label>
                                    <Form.Select className="py-2">
                                        <option>Woman</option>
                                        <option>Man</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Age</Form.Label>
                                    <div className="d-flex gap-2">
                                        <Form.Control type="number" placeholder="20" min="18" className="py-2" />
                                        <span className="align-self-center">to</span>
                                        <Form.Control type="number" placeholder="30" max="70" className="py-2" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Religion</Form.Label>
                                    <Form.Select className="py-2">
                                        <option>Hindu</option>
                                        <option>Muslim</option>
                                        <option>Christian</option>
                                        <option>Sikh</option>
                                        <option>Jain</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" className="py-2" />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Button className="btn-pink w-100 py-2 fw-bold">
                                    <i className="fas fa-search me-2"></i> Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </section>
    );
};

export default Search;
